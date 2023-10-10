import { Environment } from "@/common/environment-variables";
import { populateRecentQNASessions } from "@/mocks/qna-session-mocks";

function fetchRecentQNASessions() {
  switch (Environment.ENVIRONMENT_TYPE) {
    case "development":
      return populateRecentQNASessions;
    case "production":
      // TODO: write fetchAPI instance for returning recent sessions via firestore
      return [];
    default:
      return [];
  }
}

export {
  fetchRecentQNASessions
}