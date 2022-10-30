# @version ^0.3.7


# Interfaces

from vyper.interfaces import ERC20
from vyper.interfaces import ERC165
from vyper.interfaces import ERC721

implements: ERC721

interface ERC721Receiver:
    def onERC721Received(
            _operator: address,
            _from: address,
            _tokenId: uint256,
            _data: Bytes[1024]
        ) -> bytes4: view

interface ClaimVault:
    def updateClaims(_claims: DynArray[Claim, 100]): nonpayable


# Structs

struct NFT:
    contract: address
    id: uint256

struct Claim:
    wallet: address
    amount: uint256


# Events

# @dev Emits when ownership of any NFT changes by any mechanism. This event emits when NFTs are
#      created (`from` == 0) and destroyed (`to` == 0). Exception: during contract creation, any
#      number of NFTs may be created and assigned without emitting Transfer. At the time of any
#      transfer, the approved address for that NFT (if any) is reset to none.
# @param _from Sender of NFT (if address is zero address it indicates token creation).
# @param _to Receiver of NFT (if address is zero address it indicates token destruction).
# @param _tokenId The NFT that got transfered.
event Transfer:
    sender: indexed(address)
    receiver: indexed(address)
    tokenId: indexed(uint256)

# @dev This emits when the approved address for an NFT is changed or reaffirmed. The zero
#      address indicates there is no approved address. When a Transfer event emits, this also
#      indicates that the approved address for that NFT (if any) is reset to none.
# @param _owner Owner of NFT.
# @param _approved Address that we are approving.
# @param _tokenId NFT which we are approving.
event Approval:
    owner: indexed(address)
    approved: indexed(address)
    tokenId: indexed(uint256)

# @dev This emits when an operator is enabled or disabled for an owner. The operator can manage
#      all NFTs of the owner.
# @param _owner Owner of NFT.
# @param _operator Address to which we are setting operator rights.
# @param _approved Status of operator rights(true if operator rights are given and false if
# revoked).
event ApprovalForAll:
    owner: indexed(address)
    operator: indexed(address)
    approved: bool


# Variables

initialised: public(bool)
nfts: public(DynArray[NFT, 2**25])
nftsByWallet: public(HashMap[address, DynArray[NFT, 2**25]])
wallets: public(DynArray[address, 2*25])
nWallets: public(uint256)
salePrice: public(uint256)
saleStarted: public(bool)
saleStartTime: public(uint256)
initialPrice: public(uint256)
saleDuration: public(uint256)
priceChange: public(uint256)
stepDuration: public(uint256)
saleEnded: public(bool)
tokenId: public(uint256)
maxNfts: public(uint256)
maxNftsPerUser: public(uint256)
burnerVault: public(address)
claimVault: public(address)

# @dev Mapping from NFT ID to the address that owns it.
idToOwner: HashMap[uint256, address]

# @dev Mapping from NFT ID to approved address.
idToApprovals: HashMap[uint256, address]

# @dev Mapping from owner address to count of his tokens.
ownerToNFTokenCount: HashMap[address, uint256]

# @dev Mapping from owner address to mapping of operator addresses.
ownerToOperators: HashMap[address, HashMap[address, bool]]

# @dev Address of minter, who can mint a token
minter: address

baseURL: String[100]

totalSupply: public(uint256)

# @dev Static list of supported ERC165 interface ids
SUPPORTED_INTERFACES: constant(bytes4[2]) = [
    # ERC165 interface ID of ERC165
    0x01ffc9a7,
    # ERC165 interface ID of ERC721
    0x80ac58cd,
]


@external
def __init__(
    _maxNfts: uint256,
    _maxNftsPerUser: uint256,
    _initialPrice: uint256,
    _saleDuration: uint256,
    _priceChange: uint256,
    _burnerVault: address,
    _claimVault: address
):
    self.minter = msg.sender
    self.baseURL = "http://bafybeibhe7kvr53lwbrnexxn7zzpqvikgvkn3nkwq4if4lkbokxrgwn2iu.ipfs.localhost:8080/?filename="

    self.initialised = True

    self.maxNfts = _maxNfts
    self.maxNftsPerUser = _maxNftsPerUser
    self.initialPrice = _initialPrice
    self.saleDuration = _saleDuration
    self.priceChange = _priceChange
    self.stepDuration = _saleDuration * _priceChange / _initialPrice
    self.burnerVault = _burnerVault
    self.claimVault = _claimVault


@external
def initialise(
    _minter: address,
    _maxNfts: uint256,
    _maxNftsPerUser: uint256,
    _initialPrice: uint256,
    _saleDuration: uint256,
    _priceChange: uint256,
    _burnerVault: address,
    _claimVault: address
):
    assert not self.initialised, "contract already initialised"

    self.minter = _minter
    self.baseURL = "http://bafybeibhe7kvr53lwbrnexxn7zzpqvikgvkn3nkwq4if4lkbokxrgwn2iu.ipfs.localhost:8080/?filename="

    self.initialised = True

    self.maxNfts = _maxNfts
    self.maxNftsPerUser = _maxNftsPerUser
    self.initialPrice = _initialPrice
    self.saleDuration = _saleDuration
    self.priceChange = _priceChange
    self.stepDuration = _saleDuration * _initialPrice / _priceChange
    self.burnerVault = _burnerVault
    self.claimVault = _claimVault


@external
def deposit(_nfts: DynArray[NFT, 15]) -> bytes4:
    assert len(self.nfts) + len(_nfts) <= self.maxNfts, "max amount of NFTs deposited"
    assert len(self.nftsByWallet[msg.sender]) + len(_nfts) <= self.maxNftsPerUser, "amount of NFTs per user reached"
    
    if msg.sender not in self.wallets:
        self.wallets.append(msg.sender)
        self.nWallets += 1
    
    for nft in _nfts:
        assert nft.contract != empty(address), "the contract is the empty address"
        self.nfts.append(nft)
        self.nftsByWallet[msg.sender].append(nft)

        ERC721(nft.contract).transferFrom(msg.sender, self, nft.id)

    return convert(method_id("onERC721Received(address,address,uint256,bytes)", output_type=Bytes[4]), bytes4)


@view
@external
def currentPrice() -> uint256:
    if not self.saleStarted or self.saleEnded:
        return max_value(uint256)

    return self._currentPrice()


@view
@internal
def _currentPrice() -> uint256:
    steps: uint256 = self.initialPrice / self.priceChange

    if self.saleStartTime + self.saleDuration < block.timestamp:
        return max_value(uint256)
    curStep: uint256 = steps - (self.saleStartTime + self.saleDuration - block.timestamp) / self.stepDuration

    return self.initialPrice - (steps - curStep) * self.priceChange


@payable
@external
def buy():
    assert msg.value == self._currentPrice(), "msg.value != than curr price"

    self.saleEnded = True
    self.salePrice = msg.value

    i: uint256 = 0
    claims: DynArray[Claim, 100] = empty(DynArray[Claim, 100])
    for wallet in self.wallets:
        share: uint256 = self.salePrice * len(self.nftsByWallet[wallet]) / len(self.nfts)
        claims.append(Claim({
            wallet: wallet,
            amount: share
        }))
        i += 1

        if i == 100:
            ClaimVault(self.claimVault).updateClaims(claims)
            claims = empty(DynArray[Claim, 100])
            i = 0
    
    if len(claims) > 0:
        ClaimVault(self.claimVault).updateClaims(claims)
    
    send(self.claimVault, msg.value)

    ERC721(self).transferFrom(self, msg.sender, self.tokenId)


@view
@external
def missingToSale() -> uint256:
    return self.maxNfts - len(self.nfts)


# @dev Implementation of ERC-721 non-fungible token standard.
# @author Ryuya Nakamura (@nrryuya)
# Modified from: https://github.com/vyperlang/vyper/blob/de74722bf2d8718cca46902be165f9fe0e3641dd/examples/tokens/ERC721.vy

@pure
@external
def supportsInterface(interface_id: bytes4) -> bool:
    """
    @dev Interface identification is specified in ERC-165.
    @param interface_id Id of the interface
    """
    return interface_id in SUPPORTED_INTERFACES


### VIEW FUNCTIONS ###

@view
@external
def balanceOf(_owner: address) -> uint256:
    """
    @dev Returns the number of NFTs owned by `_owner`.
         Throws if `_owner` is the zero address. NFTs assigned to the zero address are considered invalid.
    @param _owner Address for whom to query the balance.
    """
    assert _owner != empty(address)
    return self.ownerToNFTokenCount[_owner]


@view
@external
def ownerOf(_tokenId: uint256) -> address:
    """
    @dev Returns the address of the owner of the NFT.
         Throws if `_tokenId` is not a valid NFT.
    @param _tokenId The identifier for an NFT.
    """
    owner: address = self.idToOwner[_tokenId]
    # Throws if `_tokenId` is not a valid NFT
    assert owner != empty(address)
    return owner


@view
@external
def getApproved(_tokenId: uint256) -> address:
    """
    @dev Get the approved address for a single NFT.
         Throws if `_tokenId` is not a valid NFT.
    @param _tokenId ID of the NFT to query the approval of.
    """
    # Throws if `_tokenId` is not a valid NFT
    assert self.idToOwner[_tokenId] != empty(address)
    return self.idToApprovals[_tokenId]


@view
@external
def isApprovedForAll(_owner: address, _operator: address) -> bool:
    """
    @dev Checks if `_operator` is an approved operator for `_owner`.
    @param _owner The address that owns the NFTs.
    @param _operator The address that acts on behalf of the owner.
    """
    return (self.ownerToOperators[_owner])[_operator]


### TRANSFER FUNCTION HELPERS ###

@view
@internal
def _isApprovedOrOwner(_spender: address, _tokenId: uint256) -> bool:
    """
    @dev Returns whether the given spender can transfer a given token ID
    @param spender address of the spender to query
    @param tokenId uint256 ID of the token to be transferred
    @return bool whether the msg.sender is approved for the given token ID,
        is an operator of the owner, or is the owner of the token
    """
    owner: address = self.idToOwner[_tokenId]
    spenderIsOwner: bool = owner == _spender
    spenderIsApproved: bool = _spender == self.idToApprovals[_tokenId]
    spenderIsApprovedForAll: bool = (self.ownerToOperators[owner])[_spender]
    return (spenderIsOwner or spenderIsApproved) or spenderIsApprovedForAll


@internal
def _addTokenTo(_to: address, _tokenId: uint256):
    """
    @dev Add a NFT to a given address
         Throws if `_tokenId` is owned by someone.
    """
    # Throws if `_tokenId` is owned by someone
    assert self.idToOwner[_tokenId] == empty(address)
    # Change the owner
    self.idToOwner[_tokenId] = _to
    # Change count tracking
    self.ownerToNFTokenCount[_to] += 1


@internal
def _removeTokenFrom(_from: address, _tokenId: uint256):
    """
    @dev Remove a NFT from a given address
         Throws if `_from` is not the current owner.
    """
    # Throws if `_from` is not the current owner
    assert self.idToOwner[_tokenId] == _from
    # Change the owner
    self.idToOwner[_tokenId] = empty(address)
    # Change count tracking
    self.ownerToNFTokenCount[_from] -= 1


@internal
def _clearApproval(_owner: address, _tokenId: uint256):
    """
    @dev Clear an approval of a given address
         Throws if `_owner` is not the current owner.
    """
    # Throws if `_owner` is not the current owner
    assert self.idToOwner[_tokenId] == _owner
    if self.idToApprovals[_tokenId] != empty(address):
        # Reset approvals
        self.idToApprovals[_tokenId] = empty(address)


@internal
def _transferFrom(_from: address, _to: address, _tokenId: uint256, _sender: address):
    """
    @dev Exeute transfer of a NFT.
         Throws unless `msg.sender` is the current owner, an authorized operator, or the approved
         address for this NFT. (NOTE: `msg.sender` not allowed in private function so pass `_sender`.)
         Throws if `_to` is the zero address.
         Throws if `_from` is not the current owner.
         Throws if `_tokenId` is not a valid NFT.
    """
    # Check requirements
    assert self._isApprovedOrOwner(_sender, _tokenId)
    # Throws if `_to` is the zero address
    assert _to != empty(address)
    # Clear approval. Throws if `_from` is not the current owner
    self._clearApproval(_from, _tokenId)
    # Remove NFT. Throws if `_tokenId` is not a valid NFT
    self._removeTokenFrom(_from, _tokenId)
    # Add NFT
    self._addTokenTo(_to, _tokenId)
    # Log the transfer
    log Transfer(_from, _to, _tokenId)

    if not self.saleEnded:
        self.saleEnded = True


@internal
def _increaseTotalSupply():
    self.totalSupply += 1


@internal
def _decreaseTotalSupply():
    self.totalSupply -= 1


### TRANSFER FUNCTIONS ###

@external
def transferFrom(_from: address, _to: address, _tokenId: uint256):
    """
    @dev Throws unless `msg.sender` is the current owner, an authorized operator, or the approved
         address for this NFT.
         Throws if `_from` is not the current owner.
         Throws if `_to` is the zero address.
         Throws if `_tokenId` is not a valid NFT.
    @notice The caller is responsible to confirm that `_to` is capable of receiving NFTs or else
            they maybe be permanently lost.
    @param _from The current owner of the NFT.
    @param _to The new owner.
    @param _tokenId The NFT to transfer.
    """
    self._transferFrom(_from, _to, _tokenId, msg.sender)


@external
def safeTransferFrom(
        _from: address,
        _to: address,
        _tokenId: uint256,
        _data: Bytes[1024]=b""
    ):
    """
    @dev Transfers the ownership of an NFT from one address to another address.
         Throws unless `msg.sender` is the current owner, an authorized operator, or the
         approved address for this NFT.
         Throws if `_from` is not the current owner.
         Throws if `_to` is the zero address.
         Throws if `_tokenId` is not a valid NFT.
         If `_to` is a smart contract, it calls `onERC721Received` on `_to` and throws if
         the return value is not `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`.
    @param _from The current owner of the NFT.
    @param _to The new owner.
    @param _tokenId The NFT to transfer.
    @param _data Additional data with no specified format, sent in call to `_to`.
    """
    self._transferFrom(_from, _to, _tokenId, msg.sender)
    if _to.is_contract: # check if `_to` is a contract address
        returnValue: bytes4 = ERC721Receiver(_to).onERC721Received(msg.sender, _from, _tokenId, _data)
        # Throws if transfer destination is a contract which does not implement 'onERC721Received'
        assert returnValue == convert(method_id("onERC721Received(address,address,uint256,bytes)", output_type=Bytes[4]), bytes4)


@external
def approve(_approved: address, _tokenId: uint256):
    """
    @dev Set or reaffirm the approved address for an NFT. The zero address indicates there is no approved address.
         Throws unless `msg.sender` is the current NFT owner, or an authorized operator of the current owner.
         Throws if `_tokenId` is not a valid NFT. (NOTE: This is not written the EIP)
         Throws if `_approved` is the current owner. (NOTE: This is not written the EIP)
    @param _approved Address to be approved for the given NFT ID.
    @param _tokenId ID of the token to be approved.
    """
    owner: address = self.idToOwner[_tokenId]
    # Throws if `_tokenId` is not a valid NFT
    assert owner != empty(address)
    # Throws if `_approved` is the current owner
    assert _approved != owner
    # Check requirements
    senderIsOwner: bool = self.idToOwner[_tokenId] == msg.sender
    senderIsApprovedForAll: bool = (self.ownerToOperators[owner])[msg.sender]
    assert (senderIsOwner or senderIsApprovedForAll)
    # Set the approval
    self.idToApprovals[_tokenId] = _approved
    log Approval(owner, _approved, _tokenId)


@external
def setApprovalForAll(_operator: address, _approved: bool):
    """
    @dev Enables or disables approval for a third party ("operator") to manage all of
         `msg.sender`'s assets. It also emits the ApprovalForAll event.
         Throws if `_operator` is the `msg.sender`. (NOTE: This is not written the EIP)
    @notice This works even if sender doesn't own any tokens at the time.
    @param _operator Address to add to the set of authorized operators.
    @param _approved True if the operators is approved, false to revoke approval.
    """
    # Throws if `_operator` is the `msg.sender`
    assert _operator != msg.sender
    self.ownerToOperators[msg.sender][_operator] = _approved
    log ApprovalForAll(msg.sender, _operator, _approved)


### MINT & BURN FUNCTIONS ###

@external
def mint(_to: address, _tokenId: uint256) -> bool:
    """
    @dev Function to mint tokens
         Throws if `msg.sender` is not the minter.
         Throws if `_to` is zero address.
         Throws if `_tokenId` is owned by someone.
    @param _to The address that will receive the minted tokens.
    @param _tokenId The token id to mint.
    @return A boolean that indicates if the operation was successful.
    """
    # Throws if `msg.sender` is not the minter
    assert msg.sender == self.minter
    assert self.totalSupply == 0, "max supply of 1 already reached"
    
    # Throws if `_to` is zero address
    assert _to != empty(address)
    
    assert _to == self, "mint receptor is not vault"

    assert len(self.nfts) == self.maxNfts, "not enough NFTs deposited"

    # Add NFT. Throws if `_tokenId` is owned by someone
    self._addTokenTo(_to, _tokenId)
    self._increaseTotalSupply()
    log Transfer(empty(address), _to, _tokenId)

    self.saleStarted = True
    self.saleStartTime = block.timestamp
    self.tokenId = _tokenId

    # TODO: do we burn the NFTs at mint time or at sale time
    for nft in self.nfts:
        ERC721(nft.contract).transferFrom(self, self.burnerVault, nft.id)

    return True


@external
def burn(_tokenId: uint256):
    """
    @dev Burns a specific ERC721 token.
         Throws unless `msg.sender` is the current owner, an authorized operator, or the approved
         address for this NFT.
         Throws if `_tokenId` is not a valid NFT.
    @param _tokenId uint256 id of the ERC721 token to be burned.
    """
    # Check requirements
    assert self._isApprovedOrOwner(msg.sender, _tokenId)
    owner: address = self.idToOwner[_tokenId]
    # Throws if `_tokenId` is not a valid NFT
    assert owner != empty(address)
    self._clearApproval(owner, _tokenId)
    self._removeTokenFrom(owner, _tokenId)
    self._decreaseTotalSupply()
    log Transfer(owner, empty(address), _tokenId)


@view
@external
def tokenURL(tokenId: uint256) -> String[200]:
    return concat(self.baseURL, uint2str(tokenId))
