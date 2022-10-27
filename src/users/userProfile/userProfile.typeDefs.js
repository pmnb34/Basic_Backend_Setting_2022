import { gql } from "apollo-server";

export default gql`
  type Query {
    userProfile(username: String!): User
  }
`;
