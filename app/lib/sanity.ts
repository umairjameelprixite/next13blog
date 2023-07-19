import { createClient } from "next-sanity";

const projectId = "2inu65kp";
const dataset = "production";
const apiVersion = "2021-10-21";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
