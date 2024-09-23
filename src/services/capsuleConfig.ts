import { Environment, OAuthMethod } from "@usecapsule/react-sdk";
import { getCapsuleWallet } from "@usecapsule/rainbowkit-wallet";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { createConfig } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";
import { createClient, http } from "viem";

// Capsule configuration
const CAPSULE_API_KEY = process.env.NEXT_PUBLIC_CAPSULE_API_KEY as string;
const CAPSULE_ENVIRONMENT = Environment.DEVELOPMENT; // Use Environment.PRODUCTION for live apps

const capsuleWalletOptions = {
  capsule: {
    apiKey: CAPSULE_API_KEY,
    environment: CAPSULE_ENVIRONMENT,
  },
  appName: "My Awesome dApp",
  oAuthMethods: [OAuthMethod.GOOGLE, OAuthMethod.TWITTER, OAuthMethod.DISCORD],
};

// Create Capsule wallet connector
const capsuleWallet = getCapsuleWallet(capsuleWalletOptions);

// Configure RainbowKit connectors
const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [capsuleWallet],
    },
  ],
  {
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
    walletConnectParameters: {},
    appName: "My Awesome dApp",
    appDescription: "An awesome decentralized application",
    appUrl: "https://incentivibe.xyz",
    // appIcon: "https://my-awesome-dapp.com/icon.png",
  }
);

// Wagmi client configuration
const config = createConfig({
  connectors,
  chains: [base, baseSepolia],
  client: ({ chain }) => createClient({ chain, transport: http() }),
});

export { connectors, config };
