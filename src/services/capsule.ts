import Capsule, { Environment } from "@usecapsule/react-sdk";

export const capsule = new Capsule(
  Environment.BETA,
  process.env.NEXT_PUBLIC_CAPSULE_API_KEY as string
);

// Verify the instance is created successfully
console.log("Capsule instance created:", capsule);
