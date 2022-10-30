const ALCHEMY_KEY = '';
const ALCHEMY_URL = 'https://eth-mainnet.g.alchemy.com/nft/v2/';
const options = { method: 'GET', headers: { accept: 'application/json' } };

export const fetchAlchemy = async () => {
  const mockedCollections = [
    {
      contractAddress: '0x1894852504288219fa835Af44528571d543958a1',
      nfts: [
        { token_id: '1' },
        { token_id: '2' },
        { token_id: '3' },
        { token_id: '4' },
        { token_id: '5' },
      ],
    },
    {
      contractAddress: '0x9eaAf84Ca9878736D0d7329f860D574a8E83551C',
      nfts: [
        { token_id: '1' },
        { token_id: '2' },
        { token_id: '3' },
        { token_id: '4' },
        { token_id: '5' },
      ],
    },
    {
      contractAddress: '0x0b0DfD106B18aE0274eE589235dE66363a63c232',
      nfts: [
        { token_id: '1' },
        { token_id: '2' },
        { token_id: '3' },
        { token_id: '4' },
        { token_id: '5' },
      ],
    },
  ];

  const parsedNfts = mockedCollections.reduce((acc, cur) => {
    if (!acc.includes(cur.contractAddress)) {
      cur.nfts.forEach((element) =>
        acc.push({
          contractAddress: cur.contractAddress,
          tokenId: element.token_id,
        })
      );
    }

    return acc;
  }, []);

  const requests = parsedNfts.map((nft) =>
    fetch(
      `${ALCHEMY_URL}${ALCHEMY_KEY}/getNFTMetadata?contractAddress=${nft.contractAddress}&tokenId=${nft.tokenId}&refreshCache=false`,
      options
    ).then((response) => response.json())
  );

  const response = await Promise.all(requests);

  return response;
};
