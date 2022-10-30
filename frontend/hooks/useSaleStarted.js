import { Contract, utils } from 'ethers';
import VaultAbi from '../abi/Vault.json';
import { useEthers } from '@usedapp/core';
import { useEffect, useState } from 'react';

const VaultInterface = new utils.Interface(VaultAbi);

export const useSaleStarted = () => {
  const { library } = useEthers();
  const [isSaleStarted, setIsSaleStarted] = useState();
  const [isSaleEnded, setIsSaleEnded] = useState();
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

    const getSaleTimings = async () => {
      const saleStatus = await vaultContract.saleStarted();
      const saleEnded = await vaultContract.saleEnded();
      setIsSaleStarted(saleStatus);
      setIsSaleEnded(saleEnded);
    };

    getSaleTimings();
    setFireSend(true);
  }, [vaultContract]);

  return { isSaleStarted, isSaleEnded };
};
