import '../styles/globals.css'
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';

import {
	mainnet,
	polygon,
  goerli,
	polygonMumbai,
} from "wagmi/chains";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { Analytics } from '@vercel/analytics/react';

const { chains, provider } = configureChains(
  [mainnet, goerli, polygon, polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})

function MyApp({ Component, pageProps }) {

  return (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider theme={darkTheme({
      accentColor: '#6d454c',
      accentColorForeground: 'white',
      modalBackground:"#D9d9d9",
      borderRadius: 'small',
      fontStack: 'system',
      overlayBlur: 'small',
    })}
    chains={chains}>
      <Component {...pageProps} />
      <Analytics />
    </RainbowKitProvider>
  </WagmiConfig>
  )
}

export default MyApp
