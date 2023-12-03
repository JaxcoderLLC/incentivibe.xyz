export enum EEventStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Canceled = "Canceled",
  Rejected = "Rejected",
  Completed = "Completed",
}

export type TEventStatus = {
  [key: string]: string;
};

export type TEvent = {
  id: string;
  name: string;
  description?: string;
  status: EEventStatus;
  raised: number;
  createdBy: string;
  createdAt: string;
  startDate: string;
  endDate: string;
};

export type TEventList = TEvent[];

export interface IEvent {
  id: string;
  name: string;
  status: EEventStatus;
  raised: number;
  createdBy: string;
  createdAt: string;
  startDate: string;
  endDate: string;
}

export interface IEventList {
  events: IEvent[];
}

export interface IEventStatus {
  status: EEventStatus;
}

export interface IEventContextProps {
  isLoaded: boolean;
  events: IEvent[];
  createEvent: () => Promise<`0x${string}`>;
  updateEvent: (id: string, status: EEventStatus) => Promise<void>;
  eventStatus: EEventStatus;
  setEventStatus: React.Dispatch<React.SetStateAction<EEventStatus>>;
}
