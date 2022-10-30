import { Contract, utils } from 'ethers';
import VaultAbi from '../abi/Vault.json';
import { useContractFunction, useEthers } from '@usedapp/core';
import { useCallback } from 'react';

const VaulInterface = new utils.Interface(VaultAbi);

export const useBuyNow = () => {
  const { library } = useEthers();

  const vaultContract = new Contract(
    '0x97B008432d2C63CD76637002d6612198De413321',
    VaulInterface,
    library
  );
  const { state, send } = useContractFunction(vaultContract, 'buy', {
    transactionName: 'Buy',
  });

  const validate = useCallback((amount) => {
    send({ value: utils.parseEther(amount) });
  }, []);

  return { state, send: validate };
};
