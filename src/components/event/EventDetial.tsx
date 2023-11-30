"use client";

import { EEventStatus, TEvent } from "@/app/types";
import { classNames, statuses } from "@/utils/common";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useParams } from "next/navigation";

const EventDetail = () => {
  const params = useParams();

  console.log(params);

  // TODO: fetch the event details
  const mockEvent: TEvent = {
    id: params.id.toString(),
    name: "FWD Party VIP Dinner",
    status: EEventStatus.Pending,
    raised: 120e18,
    createdBy: "Leslie Alexander",
    createdAt: "2023-03-17T00:00Z",
    startDate: "2023-03-17T00:00Z",
    endDate: "2023-03-17T00:00Z",
  };

  return (
    <div className="px-6">
      <h1>Event Detail for {params.id}</h1>
      {/* todo: show the event details
        - if the creator is the current user, show the edit button
        - if the creator is not the current user, show the join button
        - if the event is in progress, show the time left
        - if the event is completed, show the status (anyway)        
      */}
      <div className="mt-4">
        <Image
          className="h-32 w-full object-cover lg:h-48"
          src="/images/hero.jpg"
          alt="Event Banner"
          width={500}
          height={300}
        />
      </div>
      <div className="mt-6 border-t border-gray-700">
        <dl className="divide-y divide-gray-700">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              <span className="flex justify-start ml-6">Name</span>
            </dt>
            <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">{mockEvent.name}</span>
              <UpdateButton />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              <span className="flex justify-start ml-6">Description</span>
            </dt>
            <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </span>
              <UpdateButton />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              <span className="flex justify-start ml-6">Status</span>
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <span className="flex justify-center">
                <p
                  className={classNames(
                    statuses[mockEvent.status as keyof typeof statuses],
                    "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                  )}
                >
                  {mockEvent.status}
                </p>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              <span className="flex justify-start ml-6">Funding Raised</span>
            </dt>
            <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">$120,000</span>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              <span className="flex justify-start ml-6">Attachments</span>
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-800 rounded-md border border-gray-800"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        resume_back_end_developer.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex flex-shrink-0 space-x-4">
                    <UpdateButton />
                    <span className="text-gray-800" aria-hidden="true">
                      |
                    </span>
                    <RemoveButton />
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

const UpdateButton = () => {
  return (
    <span className="ml-4">
      <button type="button" className="rounded-md font-medium text-gray-900 ">
        Update
      </button>
    </span>
  );
};

const RemoveButton = () => {
  return (
    <span className="ml-4">
      <button type="button" className="rounded-md font-medium text-gray-900 ">
        Remove
      </button>
    </span>
  );
};

export default EventDetail;