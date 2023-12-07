"use client";

import { TStatus, TEvent } from "@/app/types";
import { classNames, statuses } from "@/utils/common";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useParams } from "next/navigation";

const CommunityDetail = () => {
  const params = useParams();

  console.log(params);

  // TODO: fetch the event details
  const mockEvent: TEvent = {
    id: params.id.toString(),
    name: "FWD Party VIP Dinner",
    status: "Pending" as TStatus,
    raised: 120e18,
    createdBy: "Leslie Alexander",
    createdAt: "2023-03-17T00:00Z",
    startDate: "2023-03-17T00:00Z",
    endDate: "2023-03-17T00:00Z",
  };

  return (
    <div className="px-6">
      <h1>Event Detail for {params.id}</h1>
      {/* todo: show the Community details
        - if the creator is the current user, show the edit button
        - if the creator is not the current user, show the join button
        - if the event is in progress, show the time left
        - if the event is completed, show the status (anyway)        
      */}
      <div className="mt-4">
        <Image
          className="h-32 w-full object-cover lg:h-48"
          src="/images/hero.jpg"
          alt="Community Banner"
          width={500}
          height={300}
        />
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

export default CommunityDetail;
