import {DocumentNode} from "graphql";
import {gql} from "apollo-server";

export const Query: DocumentNode = gql`
    type Query {
        Groups: [Group]
    }
`
