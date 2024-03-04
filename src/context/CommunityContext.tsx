"use client";

import { createContext, useEffect, useState } from "react";
import {
  ICommunityContextProps,
  TCommunityStatus,
  TStatus,
} from "../app/types";

export const CommunityContext = createContext<ICommunityContextProps>({
  isLoaded: false,
  communities: [],
  createCommunity: () => Promise.resolve("0x"),
  updateCommunity: (id: string, data: {}) => Promise.resolve(),
  communityStatus: "Pending" as TCommunityStatus,
  setCommunityStatus: () => {},
});

export const CommunityContextProvider = (props: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const { children } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [communities, setCommunitys] = useState<any>();
  const [eventStatus, setCommunityStatus] = useState<TStatus>(
    "Pending" as TStatus
  );

  useEffect(() => {
    console.log("fetching communities");
    const fetchCommunitys = async () => {
      // TODO: fetch communities
      // const communities = await getCommunitys();
      // setCommunitys(communities);
      setIsLoaded(true);
    };
    fetchCommunitys();
  }, []);

  const createCommunity = async () => {
    // todo: create an event
    const newCommunityId: `0x${string}` = "0x";

    return newCommunityId;
  };

  const updateCommunity = async () => {
    // todo: update an event
  };

  return (
    <CommunityContext.Provider
      value={{
        isLoaded,
        communities,
        createCommunity,
        updateCommunity,
        eventStatus
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
};
