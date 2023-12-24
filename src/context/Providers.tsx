import { wagmiConfig } from "@/services/wagmi";
import { EventContextProvider } from "./EventContext";
import { WagmiConfig } from "wagmi";

const Providers = (props: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <EventContextProvider>{props.children}</EventContextProvider>
    </WagmiConfig>
  );
};

export default Providers;
