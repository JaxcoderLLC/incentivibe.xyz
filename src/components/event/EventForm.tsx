"use client";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  startDate: yup.date().required(),
  endDate: yup.date().required(),
});

const EventForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <h1>EventForm</h1>
    </div>
  );
};

export default EventForm;
