import { TEventStatus, EEventStatus } from "@/app/types";

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const statuses: TEventStatus = {
  [EEventStatus.Pending]: "text-yellow-700 bg-yellow-50 ring-yellow-600/20",
  [EEventStatus.InProgress]: "text-blue-600 bg-blue-50 ring-blue-500/10",
  [EEventStatus.Completed]: "text-green-800 bg-green-50 ring-green-600/20",
  [EEventStatus.Canceled]: "text-gray-800 bg-gray-50 ring-gray-600/20",
  [EEventStatus.Rejected]: "text-red-800 bg-red-50 ring-red-600/20",
};