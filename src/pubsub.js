import { PubSub } from "apollo-server-express";

const pubsub = new PubSub();
// Public Subscription
// graphQL 에서 Query, Mutation 이외에 'Web-Socket 프로토콜'을 사용하는 Subscription 기능

export default pubsub;
