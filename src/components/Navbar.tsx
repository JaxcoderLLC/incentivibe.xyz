"use client";

import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/IV_Logo_1.png";
import Dropdown from "./Dropdown";
import ToastNotification from "./ToastNotification";

const navigation = [
  { name: "Redeem", href: "/redeem", current: false },
  { name: "Calendar", href: "/calendar", current: false },
];

export type TToastNotification = {
  show: boolean;
  args: any[];
};

export default function Navbar() {
  const [toastNotification, setToastNotification] =
    useState<TToastNotification>({
      show: false,
      args: [],
    });
  const [profileId, setProfileId] = useState<`0x${string}`>("0x");

  const userNavigation = [
    { name: "Redeem", href: "/redeem", current: false },
    { name: "Calendar", href: "/calendar", current: false },
    // { name: "My Profile", href: `/profile/${profileId}` },
    { name: "Settings", href: "/settings" },
  ];

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
                {/* <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4 cursor-pointer">
                  <Dropdown profileId={profileId} />
                </div> */}
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* Add wallet connect here */}
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  {/* Notifications icon/button */}
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
