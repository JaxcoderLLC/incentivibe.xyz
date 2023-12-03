"use client";

import { createContext, useEffect, useState } from "react";
import { EEventStatus, IEventContextProps, TEventList } from "../app/types";

export const EventContext = createContext<IEventContextProps>({
  isLoaded: false,
  events: [],
  createEvent: () => Promise.resolve("0x"),
  updateEvent: (id: string, status: EEventStatus) => Promise.resolve(),
  eventStatus: EEventStatus.Pending,
  setEventStatus: () => {},
});

export const EventContextProvider = (props: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const { children } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [events, setEvents] = useState<TEventList>([]);
  const [eventStatus, setEventStatus] = useState<EEventStatus>(
    EEventStatus.Pending
  );

  useEffect(() => {
    console.log("fetching events");
    const fetchEvents = async () => {
      // TODO: fetch events
      // const events = await getEvents();
      // setEvents(events);
      setIsLoaded(true);
    };
    fetchEvents();
  }, []);

  const createEvent = async () => {
    // todo: create an event
    const newEventId: `0x${string}` = "0x";

    return newEventId;
  };

  const updateEvent = async () => {
    // todo: update an event
  };

  return (
    <EventContext.Provider
      value={{
        isLoaded,
        events,
        createEvent,
        updateEvent,
        eventStatus,
        setEventStatus,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
