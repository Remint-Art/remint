import { useEffect, useState } from 'react';
import { useVaultData } from '../hooks/useVaultData';
import { parseDepositCollections } from '../utils/parseDepositCollections';
import {
  Card,
  CardMedia,
  CardActionArea,
  Grid,
  CardContent,
  Button,
} from '@mui/material';

import DoneIcon from '@mui/icons-material/Done';

export const NftsContent = ({ cards }) => {
  const [cardsToShow, setCardsToShow] = useState([]);

  console.log('🚀 ~ NftsContent ~ cardsToShow', cardsToShow);

  const [cardsToDeposit, setCardsToDeposit] = useState([]);
  const { state, send } = useVaultData();

  console.log('🚀 ~ NftsContent ~ state', state);

  const parseNfts = (cards, contractAddress, tokenId) => {
    return cards.map((card) => {
      if (
        card.contract.address === contractAddress &&
        card.id.tokenId === tokenId
      ) {
        setCardsToDeposit((prevState) => [
          ...prevState,
          { contract: card.contract.address, id: card.id.tokenId },
        ]);
        return { ...card, isSelected: true };
      }
      return card;
    });
  };

  const handleOnClick = (contractAddress, tokenId) => {
    setCardsToShow(parseNfts(cardsToShow, contractAddress, tokenId));
  };

  const removeCards = (cards) => {
    const cardsToReturn2 = cards.reduce(
      (acc, cur) => {
        if (acc.includes(cur.contract) && acc.includes(cur.id)) {
          const cardIndexToRemove = acc.findIndex(
            (el) =>
              el.contract.address === cur.contract && el.id.tokenId === cur.id
          );
          acc.slice(cardIndexToRemove);
          return acc;
        }

        return acc;
      },
      [cardsToShow]
    );

    console.log('🚀 ~ removeCards ~ cardsToReturn2', cardsToReturn2);

    const cardsToReturn = cardsToShow.filter((card) => {
      console.log('🚀 ~ removeCards ~ cards', cards);
      console.log('🚀 ~ cardsToReturn ~ card', card);
      if (
        !cards.includes(card.contract.address) &&
        !cards.includes(card.id.tokenId)
      ) {
        console.log('inside');
        return card;
      }
    });

    console.log('🚀 ~ removeCards ~ cardsToReturn', cardsToReturn);

    return cardsToReturn2;
  };

  // useEffect(() => {
  //   if (state.status === 'Success') {
  //     setCardsToShow(removeCards(cardsToDeposit));
  //   }
  // }, [state]);

  useEffect(() => {
    if (cards?.length > 0) {
      const parsedCards = cards.map((card) => ({ ...card, isSelected: false }));
      return setCardsToShow(parsedCards);
    }
  }, [cards]);

  const handleSendingDeposits = () => {
    const parsedDeposits = parseDepositCollections(cardsToDeposit);
    send(parsedDeposits);
  };

  return (
    <div style={{ backgroundColor: '#000000' }}>
      <>
        <div className='flex justify-center pt-10  text-6xl'>
          <h1>Your Wallet</h1>
        </div>
        <div className='p-16'>
          <Grid container item spacing={2} columnSpacing={3} rowSpacing={3}>
            {cardsToShow &&
              cardsToShow.map((card, index) => {
                return (
                  <Grid item xs={3} md={3} key={index}>
                    <Card
                      sx={{ maxWidth: 345, padding: 2 }}
                      onClick={() =>
                        handleOnClick(card.contract.address, card.id.tokenId)
                      }
                    >
                      <CardActionArea>
                        <CardMedia
                          component='img'
                          alt={card?.title}
                          height='100'
                          image={card?.media[0]?.thumbnail}
                        />
                        <CardContent
                          sx={{
                            minHeight: '60px',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          {card.isSelected && <DoneIcon />}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
          <div className='flex align-center justify-center pt-16'>
            <Button variant='contained' onClick={handleSendingDeposits}>
              Click To Deposit
            </Button>
          </div>
        </div>
      </>
    </div>
  );
};
