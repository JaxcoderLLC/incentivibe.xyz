// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

import { TEventStatus, EEventStatus, TEvent, TEventList } from "@/app/types";
import Link from "next/link";

const statuses: TEventStatus = {
  [EEventStatus.Pending]: "text-yellow-700 bg-yellow-50 ring-yellow-600/20",
  [EEventStatus.InProgress]: "text-blue-600 bg-blue-50 ring-blue-500/10",
  [EEventStatus.Completed]: "text-green-800 bg-green-50 ring-green-600/20",
  [EEventStatus.Canceled]: "text-gray-800 bg-gray-50 ring-gray-600/20",
  [EEventStatus.Rejected]: "text-red-800 bg-red-50 ring-red-600/20",
};

const events: TEventList = [
  {
    id: "1",
    name: "FWD Party VIP Dinner",
    status: EEventStatus.Pending,
    createdBy: "Leslie Alexander",
    createdAt: "2023-03-17T00:00Z",
    startDate: "2023-03-17T00:00Z",
    endDate: "2023-03-17T00:00Z",
  },
  {
    id: "2",
    name: "Door Knockers Unite Rally",
    status: EEventStatus.InProgress,
    createdBy: "Leslie Alexander",
    createdAt: "2023-03-17T00:00Z",
    startDate: "2023-03-17T00:00Z",
    endDate: "2023-05-05T00:00Z",
  },
  {
    id: "3",
    name: "Onboarding coffee hour",
    status: EEventStatus.Rejected,
    createdBy: "Courtney Henry",
    createdAt: "2023-03-17T00:00Z",
    startDate: "2023-03-17T00:00Z",
    endDate: "2023-05-25T00:00Z",
  },
  {
    id: "4",
    name: "Will4Us Happy hour",
    status: EEventStatus.Canceled,
    createdBy: "Leonard Krasner",
    createdAt: "2023-03-17T00:00Z",
    startDate: "2023-03-17T00:00Z",
    endDate: "2023-06-07T00:00Z",
  },
  {
    id: "5",
    name: "Open Civics Town Hall Social",
    status: EEventStatus.Completed,
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
              {/* <Menu as="div" className="relative flex-none">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                      >
                        Edit<span className="sr-only">, {event.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                      >
                        Move<span className="sr-only">, {event.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                      >
                        Delete<span className="sr-only">, {event.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
