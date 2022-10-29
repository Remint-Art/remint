# @version ^0.3.7


# Interfaces

interface Vault:
    def initialise(
        _minter: address,
        _maxNfts: uint256,
        _maxNftsPerUser: uint256,
        _initialPrice: uint256,
        _saleDuration: uint256,
        _priceChange: uint256,
        _burnerVault: address,
        _claimVault: address
    ): nonpayable
    def saleStarted() -> bool: view
    def saleEnded() -> bool: view

interface ClaimVault:
    def setVault(_address: address): nonpayable


# Variables

owner: public(address)
implementation: public(address)
pastVaults: public(DynArray[address, 2**20])
nPastVaults: public(uint256)
currVault: public(address)
burnerVault: public(address)
claimVault: public(address)

SALT: constant(bytes32) = keccak256("remint")


@external
def __init__(_initialImpl: address, _burnerVault: address, _claimVault: address):
    assert _initialImpl != empty(address), "impl is zero address"
    assert _initialImpl.is_contract, "impl is not contract"

    self.owner = msg.sender
    self.implementation = _initialImpl
    self.burnerVault = _burnerVault
    self.claimVault = _claimVault


@external
def setImplementation(_impl: address):
    assert msg.sender == self.owner, "sender is not owner"
    assert _impl != empty(address), "impl is zero address"
    assert _impl.is_contract, "impl is not contract"

    self.implementation = _impl


@external
def deployVault() -> address:
    assert msg.sender == self.owner, "sender is not owner"
    if self.currVault != empty(address) and Vault(self.currVault).saleStarted() and not Vault(self.currVault).saleEnded():
        raise "current vault is in sale"

    vault: address = create_copy_of(self.implementation, value=0, salt=SALT)
    Vault(vault).initialise(
        msg.sender,
        60,
        15,
        as_wei_value(20, "ether"),
        3 * 86400,
        as_wei_value(1, "ether"),
        self.burnerVault,
        self.claimVault
    )

    ClaimVault(self.claimVault).setVault(vault)

    if self.currVault != empty(address):
        self.pastVaults.append(self.currVault)
        self.nPastVaults += 1
    self.currVault = vault

    return vault
