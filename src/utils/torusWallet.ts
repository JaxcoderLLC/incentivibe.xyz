import { CHAIN_NAMESPACES } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";

export const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID!;
export const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL!;

export const web3auth = new Web3Auth({
  clientId,
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "5",
    rpcTarget: rpcUrl,
  },
  web3AuthNetwork: "sapphire_devnet",
});

export const addChain = async () => {
  if (!web3auth.provider) {
    console.info("provider not initialized yet");

    return;
  }
  const newChain = {
    chainId: "0x5",
    displayName: "Goerli",
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    tickerName: "Goerli",
    ticker: "ETH",
    decimals: 18,
    rpcTarget: "https://rpc.ankr.com/eth_goerli",
    blockExplorer: "https://goerli.etherscan.io",
  };
  await web3auth?.addChain(newChain);
  console.log("New Chain Added");
};
