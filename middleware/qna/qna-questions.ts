import { Environment } from '@/common/environment-variables';
import { QnaMockQuestions } from '@/mocks/qna-questions-mock';

function fetchQnaQuestions(){
    switch (Environment.ENVIRONMENT_TYPE){
        case "development":
            return QnaMockQuestions;
        case "production":
            //TODO Send topic-name and fetch questions-list with marks for each question via openAI
            return [];
        default:
            return [];
    }
}

export {fetchQnaQuestions};