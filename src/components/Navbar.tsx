"use client";

import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import RPC from "../utils/ethersRPC";
import Link from "next/link";
import Image from "next/image";
import { IProvider, CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";
import { TorusWalletConnectorPlugin } from "@web3auth/torus-wallet-connector-plugin";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { web3auth } from "@/utils/torusWallet";
import logo from "../assets/IV_Logo_1.png";
import Dropdown from "./Dropdown";
import ToastNotification from "./ToastNotification";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Redeem", href: "/redeem", current: false },
  { name: "Calendar", href: "/calendar", current: false },
];
const userNavigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Redeem", href: "/redeem", current: false },
  { name: "Calendar", href: "/calendar", current: false },
  { name: "My Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
  // { name: "Sign out", href: "/log-out" },
];

export type TToastNotification = {
  show: boolean;
  args: any[];
};

export default function Navbar() {
  // const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [torusPlugin, setTorusPlugin] =
    useState<TorusWalletConnectorPlugin | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [toastNotification, setToastNotification] =
    useState<TToastNotification>({
      show: false,
      args: [],
    });

  useEffect(() => {
    const init = async () => {
      try {
        // const web3auth = new Web3Auth({
        //   clientId,
        //   chainConfig: {
        //     chainNamespace: CHAIN_NAMESPACES.EIP155,
        //     chainId: "5",
        //     rpcTarget: rpcUrl,
        //   },
        //   web3AuthNetwork: "sapphire_devnet",
        // });

        const openloginAdapter = new OpenloginAdapter({
          loginSettings: {
            mfaLevel: "optional",
          },
          adapterSettings: {
            whiteLabel: {
              appName: "IncentiVibe",
              logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
              logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
              defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
              mode: "dark", // whether to enable dark mode. defaultValue: false
            },
            mfaSettings: {
              deviceShareFactor: {
                enable: true,
                priority: 1,
                mandatory: true,
              },
              backUpShareFactor: {
                enable: true,
                priority: 2,
                mandatory: false,
              },
              socialBackupFactor: {
                enable: true,
                priority: 3,
                mandatory: false,
              },
              passwordFactor: {
                enable: true,
                priority: 4,
                mandatory: false,
              },
            },
            loginConfig: {
              google: {
                verifier: "w3a-google-demo",
                typeOfLogin: "google",
                clientId:
                  "519228911939-cri01h55lsjbsia1k7ll6qpalrus75ps.apps.googleusercontent.com", //use your app client id you got from google
              },
              facebook: {
                verifier: "w3a-facebook-demo",
                typeOfLogin: "facebook",
                clientId: "215892741216994", //use your app client id you got from facebook
              },
              discord: {
                verifier: "w3a-discord-demo",
                typeOfLogin: "discord",
                clientId: "1151006428610433095", //use your app client id you got from discord
              },
              twitch: {
                verifier: "w3a-twitch-demo",
                typeOfLogin: "twitch",
                clientId: "3k7e70gowvxjaxg71hjnc8h8ih3bpf", //use your app client id you got from twitch
              },
            },
          },
        });
        web3auth.configureAdapter(openloginAdapter);

        // plugins and adapters are optional and can be added as per your requirement
        // read more about plugins here: https://web3auth.io/docs/sdk/web/plugins/

        // adding torus wallet connector plugin

        const torusPlugin = new TorusWalletConnectorPlugin({
          torusWalletOpts: {},
          walletInitOptions: {
            whiteLabel: {
              theme: { isDark: true, colors: { primary: "#00a8ff" } },
              logoDark: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
              logoLight: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
            },
            useWalletConnect: true,
          },
        });
        setTorusPlugin(torusPlugin);
        await web3auth.addPlugin(torusPlugin);

        // setWeb3auth(web3auth);

        // await web3auth.initModal();

        await web3auth.initModal({
          modalConfig: {
            [WALLET_ADAPTERS.OPENLOGIN]: {
              label: "openlogin",
              loginMethods: {
                // Disable facebook and reddit
                apple: {
                  name: "facebook",
                  showOnModal: true,
                },
                reddit: {
                  name: "reddit",
                  showOnModal: true,
                },
                line: {
                  name: "line",
                  showOnModal: false,
                },
                github: {
                  name: "github",
                  showOnModal: true,
                },
                wechat: {
                  name: "wechat",
                  showOnModal: false,
                },
                twitter: {
                  name: "twitter",
                  showOnModal: true,
                },
                kakao: {
                  name: "kakao",
                  showOnModal: false,
                },
                linkedin: {
                  name: "linkedin",
                  showOnModal: true,
                },
                weibo: {
                  name: "weibo",
                  showOnModal: false,
                },
                // Disable email_passwordless and sms_passwordless
                email_passwordless: {
                  name: "email_passwordless",
                  showOnModal: true,
                },
                sms_passwordless: {
                  name: "sms_passwordless",
                  showOnModal: true,
                },
              },
            },
            [WALLET_ADAPTERS.METAMASK]: {
              label: "metamask",
              loginMethods: {
                metamask: {
                  name: "metamask",
                  showOnModal: true,
                },
              },
            },
          },
        });

        if (web3auth.provider) {
          setProvider(web3auth.provider);
        }

        if (web3auth.connected) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    setToast("Logging in...");
    if (!web3auth) {
      setToast("web3auth not initialized yet");

      return false;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    setLoggedIn(true);

    return true;
  };

  const authenticateUser = async () => {
    if (!web3auth) {
      setToast("web3auth not initialized yet");

      return;
    }
    const idToken = await web3auth.authenticateUser();
    setToast(idToken);
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      setToast("web3auth not initialized yet");

      return;
    }
    const user = await web3auth.getUserInfo();
    setToast(user);
  };

  const logout = async () => {
    if (!web3auth) {
      setToast("web3auth not initialized yet");

      return;
    }
    await web3auth.logout();
    setProvider(null);
    setLoggedIn(false);
  };

  const showWCM = async () => {
    if (!torusPlugin) {
      setToast("torus plugin not initialized yet");

      return;
    }
    torusPlugin.showWalletConnectScanner();
    setToast();
  };

  const initiateTopUp = async () => {
    if (!torusPlugin) {
      setToast("torus plugin not initialized yet");

      return;
    }
    torusPlugin.initiateTopup("moonpay", {
      // FIXME: update this address
      selectedAddress: "0x8cFa648eBfD5736127BbaBd1d3cAe221B45AB9AF",
      selectedCurrency: "USD",
      fiatValue: 100,
      selectedCryptoCurrency: "ETH",
      chainNetwork: "mainnet",
    });
  };

  const getChainId = async () => {
    if (!provider) {
      setToast("provider not initialized yet");

      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    setToast(chainId);
  };

  const switchChain = async () => {
    if (!provider) {
      setToast("provider not initialized yet");

      return;
    }
    await web3auth?.switchChain({ chainId: "0x5" });
    setToast("Chain Switched");
  };

  const getAccounts = async () => {
    if (!provider) {
      setToast("provider not initialized yet");

      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    setToast(address);
  };

  const getBalance = async () => {
    if (!provider) {
      setToast("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    setToast(balance);
  };

  const sendTransaction = async () => {
    if (!provider) {
      setToast("provider not initialized yet");

      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    setToast(receipt);
  };

  const signMessage = async () => {
    if (!provider) {
      setToast("provider not initialized yet");

      return;
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage();
    setToast(signedMessage);
  };

  const getPrivateKey = async () => {
    if (!provider) {
      setToast("provider not initialized yet");

      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    setToast(privateKey);
  };

  function setToast(...args: any[]) {
    setToastNotification({ show: true, args: args });
  }

  return (
    <Disclosure
      as="nav"
      className="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 fixed w-full z"
    >
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {toastNotification.show ? (
              <ToastNotification args={toastNotification.args} />
            ) : (
              <></>
            )}
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden md:flex md:items-center md:cursor-pointer">
                  <Image
                    className="h-auto w-auto"
                    src={logo}
                    alt="IncentiVibe"
                    height={64}
                    width={64}
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  />
                </div>
                <div className="hidden md:flex md:items-center md:space-x-4 cursor-pointer">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium"
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4 cursor-pointer">
                  <Dropdown />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex border border-white text-whiteitems-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold"
                    onClick={async () => {
                      console.log("login");

                      // log the user in
                      if (loggedIn) await logout();
                      else await login();

                      console.log("login status:", loggedIn);
                    }}
                  >
                    {/* Add wallet connect button */}
                    {!loggedIn ? "Connect" : "Logout"}
                  </button>
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  {/* <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button> */}

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }: { active: boolean }) => {
                              console.log("active:", active);
                              return <a href={item.href}>{item.name}</a>;
                            }}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="hidden md:flex space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => {
                console.log("item:", item);
                if (loggedIn) {
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                }
              })}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="mt-3 space-y-1 px-2 sm:px-3">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
