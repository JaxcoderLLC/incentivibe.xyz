import { Web3AuthContext } from "@/app/context/Web3AuthContext";
import Link from "next/link";
import { useContext, useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Navbar = () => {
  const { data } = useContext(Web3AuthContext);

  return (
    <div>
      <nav
        className="flex items-center justify-between p-6 px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex max-w-[240px] bg-indigo-600 p-2 px-4 rounded-lg hover:bg-indigo-300">
          <button onClick={() => {
            console.log("Connect Wallet");
            data.login();
          }}>
            Connect Wallet
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
