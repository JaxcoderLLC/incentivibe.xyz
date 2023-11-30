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
  