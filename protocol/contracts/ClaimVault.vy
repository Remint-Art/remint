# @version ^0.3.7


# Events

event Payment:
    amount: uint256
    sender: indexed(address)


# Structs

struct Claim:
    wallet: address
    amount: uint256


# Variables

owner: public(address)
claims: public(HashMap[address, uint256])
vault: public(address)


@external
def __init__():
    self.owner = msg.sender


@external
def setVault(_address: address):
    # assert msg.sender == self.owner, "sender is not the owner"
    assert self.vault == empty(address), "vault is already set"
    assert _address != empty(address), "_address is the zero address"

    self.vault = _address


@external
def claim():
    assert self.claims[msg.sender] > 0, "sender has no claim"

    amount: uint256 = self.claims[msg.sender]
    self.claims[msg.sender] = 0
    
    send(msg.sender, amount)


@external
def updateClaims(_claims: DynArray[Claim, 100]):
    assert msg.sender == self.vault, "sender is not vault"

    for claim in _claims:
        assert claim.wallet != empty(address), "wallet is zero address"
        assert claim.amount != 0, "amount is zero"

        self.claims[claim.wallet] += claim.amount


@external
@payable
def __default__():
    log Payment(msg.value, msg.sender)