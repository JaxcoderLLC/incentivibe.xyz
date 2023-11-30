import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/utils/common";
import Link from "next/link";

export default function Dropdown({ profileId }: { profileId: `0x${string}` }) {
  const profileLink = `/profile/${profileId ?? "0x"}`;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-transparent text-sm font-semibold text-gray-800 shadow-sm">
          More ...
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-500 shadow-lg ring-1 ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={profileLink}
                  className={classNames(
                    active ? "bg-gray-600 text-gray-900" : "text-gray-900",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/settings"
                  className={classNames(
                    active ? "bg-gray-600 text-gray-900" : "text-gray-900",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Settings
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
