// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

import { TCommunityList, TCommunityStatus } from "@/app/types";
import { statuses } from "@/utils/common";
import Link from "next/link";

const communities: TCommunityList = [
  {
    id: "0xdbaed869fa387e43fc26a42928c1cf398bc60ba1",
    name: "FWD Party Community",
    description: "A dinner for the FWD Party VIPs",
    raised: 120e18,
    events: [],
    members: [],
    createdAt: "1701783555",
    status: "Pending" as TCommunityStatus,
    supportedTokens: [],
    owner: "0xdbaed869fa387e43fc26a42928c1cf398bc60ba1",
  },
  {
    id: "0x7c5befe28a0fbcf9e2c0e2c2c2c2c2c2c2c2c2c2",
    name: "Door Knockers Unite Rally",
    description: "A rally for the Door Knockers Unite",
    status: "InProgress" as TCommunityStatus,
    raised: 100e18,
    events: [],
    members: [],
    createdAt: "1701783555",
    supportedTokens: [],
    owner: "0xdbaed869fa387e43fc26a42928c1cf398bc60ba1",
  },
  {
    id: "0x7c5befe28a0fbcf9e2c0e2c2c2c2c2c2c2c2c2c2",
    name: "Onboarding coffee hour",
    description: "A coffee hour for the Onboarding",
    status: "Rejected" as TCommunityStatus,
    raised: 50e18,
    events: [],
    members: [],
    createdAt: "1701783555",
    supportedTokens: [],
    owner: "0xdbaed869fa387e43fc26a42928c1cf398bc60ba1",
  },
  {
    id: "0x7c5befe28a0fbcf9e2c0e2c2c2c2c2c2c2c2c2c2",
    name: "Will4Us Happy hour",
    description: "A happy hour for the Will4Us",
    status: "Canceled" as TCommunityStatus,
    raised: 0,
    events: [],
    members: [],
    createdAt: "1701783555",
    supportedTokens: [],
    owner: "0xdbaed869fa387e43fc26a42928c1cf398bc60ba1",
  },
  {
    id: "0xc3e5d7b8a0fbcf9e2c0e2c2c2c2c2c2c2c2c2c2",
    name: "Open Civics Town Hall Social",
    description: "A town hall social for the Open Civics",
    status: "Completed" as TCommunityStatus,
    raised: 100e18,
    events: [],
    members: [],
    createdAt: "1701783555",
    supportedTokens: [],
    owner: "0xdbaed869fa387e43fc26a42928c1cf398bc60ba1",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CommunityList = () => {
  return (
    <div className="px-8 pt-4">
      <ul
        role="list"
        className="divide-y border p-2 rounded-md border-neutral-500"
      >
        {communities.map((community: any) => (
          <li
            key={community.id}
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {community.name}
                </p>
                <p
                  className={classNames(
                    statuses[community.status as keyof typeof statuses],
                    "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                  )}
                >
                  {community.status}
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p className="whitespace-nowrap">
                  Due on{" "}
                  <time dateTime={community.endDate}>
                    {community.startDate}
                  </time>
                </p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <p className="truncate">Created by {community.createdBy}</p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4 ">
              <Link
                href={`/community/${community.id}`}
                className="border mx-2 rounded-md px-4 py-2 text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-100 sm:block"
              >
                View community
                <span className="sr-only">, {community.name}</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityList;
