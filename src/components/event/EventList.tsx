// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

import { TEventStatus, EEventStatus, TEvent, TEventList } from "@/app/types";
import { statuses } from "@/utils/common";
import Link from "next/link";

const events: TEventList = [
  {
    id: "1",
    name: "FWD Party VIP Dinner",
    status: EEventStatus.Pending,
    raised: 120e18,
    createdBy: "Leslie Alexander",
    createdAt: "2023-03-17T00:00Z",
    startDate: "2023-03-17T00:00Z",
    endDate: "2023-03-17T00:00Z",
  },
  {
    id: "2",
    name: "Door Knockers Unite Rally",
    status: EEventStatus.InProgress,
    raised: 100e18,
    createdBy: "Leslie Alexander",
    createdAt: "2023-03-17T00:00Z",
    startDate: "2023-03-17T00:00Z",
    endDate: "2023-05-05T00:00Z",
  },
  {
    id: "3",
    name: "Onboarding coffee hour",
    status: EEventStatus.Rejected,
    raised: 50e18,
    createdBy: "Courtney Henry",
    createdAt: "2023-03-17T00:00Z",
    startDate: "2023-03-17T00:00Z",
    endDate: "2023-05-25T00:00Z",
  },
  {
    id: "4",
    name: "Will4Us Happy hour",
    status: EEventStatus.Canceled,
    raised: 0,
    createdBy: "Leonard Krasner",
    createdAt: "2023-03-17T00:00Z",
    startDate: "2023-03-17T00:00Z",
    endDate: "2023-06-07T00:00Z",
  },
  {
    id: "5",
    name: "Open Civics Town Hall Social",
    status: EEventStatus.Completed,
    raised: 100e18,
    createdBy: "Courtney Henry",
    createdAt: "2023-03-17T00:00Z",
    startDate: "2023-03-17T00:00Z",
    endDate: "2023-06-10T00:00Z",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const EventList = () => {
  return (
    <div className="px-8 pt-4">
      <ul role="list" className="divide-y divide-gray-100">
        {events.map((event) => (
          <li
            key={event.id}
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {event.name}
                </p>
                <p
                  className={classNames(
                    statuses[event.status as keyof typeof statuses],
                    "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                  )}
                >
                  {event.status}
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p className="whitespace-nowrap">
                  Due on <time dateTime={event.endDate}>{event.startDate}</time>
                </p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <p className="truncate">Created by {event.createdBy}</p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <Link
                href={`/event/${event.id}`}
                className="hidden rounded-md px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:block"
              >
                View event<span className="sr-only">, {event.name}</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;