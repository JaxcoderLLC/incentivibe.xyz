"use client";

import React, { useEffect } from "react";
import { initSilk } from "@silk-wallet/silk-wallet-sdk";
import EventList from "@/components/event/EventList";
import Hero from "@/components/Hero";
import { Container } from "@/components/Container";

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
      <Container>
        <Hero />
        <EventList />
      </Container>
    </main>
  );
};

export default HomePage;
