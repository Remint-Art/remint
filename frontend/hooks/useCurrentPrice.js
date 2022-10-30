import { Contract, utils } from 'ethers';
import VaultAbi from '../abi/Vault.json';
import { useEthers } from '@usedapp/core';
import { useEffect, useState } from 'react';
import { formatEther } from '@ethersproject/units';
const VaultInterface = new utils.Interface(VaultAbi);

export const useCurrentPrice = () => {
  const { library } = useEthers();
  const [currentPrice, setCurrentPrice] = useState();
  const [saleTimeLeft, setSaleTimeLeft] = useState();

  const [fireSend, setFireSend] = useState(false);

  const vaultContract = new Contract(
    '0x97B008432d2C63CD76637002d6612198De413321',
    VaultInterface,
    library
  );
  const toDateTime = (secs) => {
    let t = new Date(secs * 1000);

    return t;
  };
  useEffect(() => {
    if (!vaultContract || fireSend) {
      return;
    }

    const getCurrentPrice = async () => {
      const currentPrice = await vaultContract.currentPrice();
      const saleStartTime = await vaultContract.saleStartTime();
      const saleDuration = await vaultContract.saleDuration();

      const convertedCurrentPrice = formatEther(currentPrice);

      const parsedTime = toDateTime(
        Number(saleStartTime) + Number(saleDuration)
      );

      setCurrentPrice(convertedCurrentPrice);
      setSaleTimeLeft(parsedTime);
    };

    getCurrentPrice();
    setFireSend(true);
  }, [vaultContract]);

  return { currentPrice, saleTimeLeft };
};
