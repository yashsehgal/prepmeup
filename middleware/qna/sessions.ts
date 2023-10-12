import { Environment } from '@/common/environment-variables';
import { populateTopics } from '@/mocks/qna-session-mocks';

function fetchTopics() {
  switch (Environment.ENVIRONMENT_TYPE) {
    case 'development':
      return populateTopics();
    case 'production':
      // TODO: Write fetch API method return data for user-topics from firestore
      return [];
    default:
      return [];
  }
}

export { fetchTopics };
