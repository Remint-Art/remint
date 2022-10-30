import { Contract, utils } from 'ethers';
import VaultAbi from '../abi/Vault.json';
import { useEthers } from '@usedapp/core';
import { useEffect, useState } from 'react';

const VaultInterface = new utils.Interface(VaultAbi);

export const useMissingToSale = () => {
  const { account, library } = useEthers();
  const [missing, setMissing] = useState();
  const [fireSend, setFireSend] = useState(false);

  const vaultContract = new Contract(
    '0x97B008432d2C63CD76637002d6612198De413321',
    VaultInterface,
    library
  );

  useEffect(() => {
    if (!vaultContract || fireSend) {
      return;
    }

    const getMissingToSale = async () => {
      const missingData = await vaultContract.missingToSale();
      setMissing(Number(missingData));
    };
    getMissingToSale();
    setFireSend(true);
  }, [vaultContract]);

  return { missing };
};
