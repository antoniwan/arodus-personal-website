import sanityClient from "@sanity/client";
import { SANITY_PROJECT_ID, SANITY_DATASET } from "../constants";

export default sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
});
