import Image from 'next/image';

import { Button } from '@mui/material';
import { useMissingToSale } from '../hooks/useMissingToSale';
import { useSaleStarted } from '../hooks/useSaleStarted';
import { useCurrentPrice } from '../hooks/useCurrentPrice';
import { useEffect, useState } from 'react';
import { useBuyNow } from '../hooks/useBuyNow';

export const Auction = () => {
  const { missing } = useMissingToSale();
  const { isSaleStarted, isSaleEnded } = useSaleStarted();
  const { currentPrice, saleTimeLeft } = useCurrentPrice();
  const { send, state } = useBuyNow();
  const [convertedTime, setConvertedTime] = useState();

  useEffect(() => {
    if (isSaleStarted) {
      const date = new Date();
      let text = date.toString();

      const searchTerm = '2022';

      const newText = text.slice(4, 24);

      setConvertedTime(newText);
    }
  }, [isSaleStarted]);

  return (
    <div
      className='flex flex-col  items-center'
      style={{ backgroundColor: '#fff' }}
    >
      <div className='flex text-white justify-center text-2xl mt-12 mb-10'>
        WELCOME TO THE AUCTION
      </div>
      {isSaleStarted && !isSaleEnded ? (
        <Image src='/frame.png' width='100%' height='100%' />
      ) : (
        <Image src='/remint_framed.png' width='100%' height='100%' />
      )}

      <div className='flex flex-col justify-center items-center'>
        {isSaleStarted && !isSaleEnded ? (
          <div
            className='flex flex-col justify-center items-center '
            style={{ color: 'black' }}
          >
            <div>Current Price: {currentPrice} ETH</div>
            <div>Auction Ends By: {convertedTime} </div>
            <Button variant='contained' onClick={() => send(currentPrice)}>
              Buy Now
            </Button>
          </div>
        ) : (
          <div
            className='flex flex-col justify-center items-center '
            style={{ color: 'black' }}
          >
            <div>NFTS LEFT FOR THE NEXT REMINT</div>
            <div>{missing}</div>
          </div>
        )}
      </div>
    </div>
  );
};
