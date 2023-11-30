"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { initSilk } from "@silk-wallet/silk-wallet-sdk";
import EventList from "@/components/event/EventList";
import Hero from "@/components/Hero";

const HomePage = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
        const provider = initSilk();

        // @ts-ignore
        window.ethereum = provider;
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main>
      <div>
        <Hero />
        <EventList />
      </div>
    </main>
  );
}

export default HomePage;