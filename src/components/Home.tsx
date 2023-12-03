"use client";

// import React, { useEffect } from "react";
// import { initSilk } from "@silk-wallet/silk-wallet-sdk";
import EventList from "@/components/event/EventList";
import Hero from "@/components/Hero";
import { Container } from "@/components/Container";

const Home = () => {
  // useEffect(() => {
  //   try {
  //     setTimeout(() => {
  //       const provider = initSilk();

  //       // @ts-ignore
  //       window.ethereum = provider;
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  // TODO: fetch the actual stats we want to show
  const stats = [
    { id: 1, name: "Creators on the platform", value: "80+" },
    { id: 2, name: "Flat platform fee", value: "3%" },
    { id: 3, name: "Total Events Created", value: "12" },
    { id: 4, name: "Paid out to creators", value: "9 ETH" },
  ];

  return (
    <main>
      <Container>
        <Hero stats={stats} />
        <EventList />
      </Container>
    </main>
  );
};

export default Home;
