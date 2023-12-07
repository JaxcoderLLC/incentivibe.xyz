export enum EStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Canceled = "Canceled",
  Rejected = "Rejected",
  Completed = "Completed",
}

export type TStatus =
  | EStatus.Pending
  | EStatus.InProgress
  | EStatus.Canceled
  | EStatus.Rejected
  | EStatus.Completed;
export type TCommunityStatus = Exclude<EStatus, EStatus.InProgress>;

export type TEventStatus = {
  [key: string]: string;
};

export type TEvent = {
  id: string;
  name: string;
  description?: string;
  status: EStatus;
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
  status: EStatus;
  raised: number;
  createdBy: string;
  createdAt: string;
  startDate: string;
  endDate: string;
}

export interface ICommunity {
  id: `0x${string}`;
  name: string;
  description: string;
  raised: number;
  events: IEvent[];
  members: `0x${string}`[];
  owner: `0x${string}`;
  createdAt: string;
  status: TCommunityStatus;
  supportedTokens: `0x${string}`[];
}

export type TNewEvent = {
  profileId: string;
  useRegistryAnchor: boolean;
  profileName: string;
  name: string;
  website: string;
  description?: string;
  startDate: string;
  endDate: string;
  tokenAddress: `0x${string}`;
};

export type TNewCommunity = ICommunity & {
  profileId: `0x${string}`;
  useRegistryAnchor: boolean;
  profileName: string;
  website: string;
};

export interface IEventList {
  events: IEvent[];
}

export type TCommunityList = ICommunity[];

export interface IEventStatus {
  status: EStatus;
}

export interface ICommunityStatus {
  status: TCommunityStatus;
}

export interface IEventContextProps {
  isLoaded: boolean;
  events: IEvent[];
  createEvent: () => Promise<`0x${string}`>;
  updateEvent: (id: string, status: EStatus) => Promise<void>;
  eventStatus: EStatus;
  setEventStatus: React.Dispatch<React.SetStateAction<EStatus>>;
}

export interface ICommunityContextProps {
  isLoaded: boolean;
  communities: ICommunity[];
  createCommunity: () => Promise<`0x${string}`>;
  updateCommunity: (id: string, data: any) => Promise<void>;
  communityStatus: TCommunityStatus;
  setCommunityStatus: React.Dispatch<React.SetStateAction<TCommunityStatus>>;
}

export type TProfilesByOwnerResponse = {
  profileId: `0x${string}`;
  name: string;
  owner: string;
  createdAt: string;
  anchor: `0x${string}`;
};

export type TProfileResponse = {
  profileId: `0x${string}`;
  nonce: number;
  name: string;
  metadataPointer: string;
  owner: `0x${string}`;
  anchor: `0x${string}`;
  creator: `0x${string}`;
  createdAt: string;
};
