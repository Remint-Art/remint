import '../styles/globals.css';
//wagmi.
import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultProvider } from 'ethers';
import { DAppProvider, useUpdateConfig } from '@usedapp/core';
import { useIsClient } from '../hooks/useIsClient';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { useEffect } from 'react';
import { AlchemyProvider, JsonRpcProvider } from '@ethersproject/providers';

const remintChain = {
  id: 155,
  name: 'Remint',
  network: 'Ethereum',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: 'http://10.1.0.153:8545',
  },
  testnet: true,
};

const defaultConfig = {
  readOnlyUrls: { [remintChain.id]: getDefaultProvider() },
};
const { chains, provider } = configureChains([remintChain], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const buildChainConfig = (chain) => ({
  networks: [chain],
  readOnlyChainId: chain.chainId,
  readOnlyUrls: {
    [chain.chainId]:
      new JsonRpcProvider(chain.rpcUrls) || getDefaultProvider(chain.id),
  },
});
const configBuilder = () => ({
  ...buildChainConfig(remintChain),
  multicallVersion: 2,
  fastMulticallEncoding: true,
});

const DAppConfigUpdater = ({ children }) => {
  const isClient = useIsClient();
  const updateConfig = useUpdateConfig();

  useEffect(() => {
    isClient && updateConfig(configBuilder());
  }, [isClient, updateConfig]);

  return <>{children}</>;
};
function MyApp({ Component, pageProps }) {
  return (
    <DAppProvider config={defaultConfig}>
      <DAppConfigUpdater>
        <WagmiConfig client={client}>
          <RainbowKitProvider chains={chains}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </DAppConfigUpdater>
    </DAppProvider>
  );
}

export default MyApp;
