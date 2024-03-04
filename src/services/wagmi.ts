"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css';
import { config } from "dotenv";
import {
  arbitrumSepolia,
  base,
  optimismSepolia,
  sepolia,
  zora
} from "wagmi/chains";

config();

export const wagmiConfig = getDefaultConfig({
  appName: "Incentivibe",
  projectId: "31b0b6255ee5cc68ae76cab5fa96a9a0",
  chains: [sepolia, optimismSepolia, arbitrumSepolia, base, zora],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

// export const wagmiConfig = createConfig({
//   chains: [sepolia, optimismSepolia, arbitrumSepolia],
//   transports: {
//     [optimismSepolia.id]: http(),
//     [arbitrumSepolia.id]: http(),
//     [sepolia.id]: http(),
//   },
// });
