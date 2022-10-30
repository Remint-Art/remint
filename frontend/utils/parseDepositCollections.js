const contractAddressOne = '0x9E4c14403d7d9A8A782044E86a93CAE09D7B2ac9';
const contractAddressTwo = '0xcCB53c9429d32594F404d01fbe9E65ED1DCda8D9';
const contractAddressThree = '0x6b4BDe1086912A6Cb24ce3dB43b3466e6c72AFd3';

export const parseDepositCollections = (nfts) => {
  return nfts.map((nft) => {
    if (nft.contract === '0x1894852504288219fa835Af44528571d543958a1') {
      return { id: Number(nft.id), contract: contractAddressOne };
    }
    if (nft.contract === '0x9eaAf84Ca9878736D0d7329f860D574a8E83551C') {
      return { id: Number(nft.id), contract: contractAddressTwo };
    }
    if (nft.contract === '0x0b0DfD106B18aE0274eE589235dE66363a63c232') {
      return { id: Number(nft.id), contract: contractAddressThree };
    }
  });
};
