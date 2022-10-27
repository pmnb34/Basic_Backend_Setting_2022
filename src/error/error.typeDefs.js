import { gql } from "apollo-server";

export default gql`
    type MutationResponse {
        result: Boolean!
        error: String
    }
`