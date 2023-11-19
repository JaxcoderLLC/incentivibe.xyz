"use client";

import { useParams } from "next/navigation";

const EventDetail = () => {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <h1>Event Detail for {params.id}</h1>
      {/* todo: show the event details
        - if the creator is the current user, show the edit button
        - if the creator is not the current user, show the join button
        - if the event is in progress, show the time left
        - if the event is completed, show the status (anyway)        
      */}
    </div>
  );
};

export default EventDetail;
