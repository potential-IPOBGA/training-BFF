import {DocumentNode} from "graphql";
import {gql} from "apollo-server";

const schema: DocumentNode = gql`
    type Trainer {
        id: ID!
        name:String!
        grouped:Boolean!
        groupId:Int
    }

    type Trainee {
        id: ID!
        name:String!
        grouped:Boolean!
        groupId:Int
    }

    type Group {
        id: ID!
        name:String!
        trainers: [Trainer]
        trainees: [Trainee]
    }

    type Query {
        groups: [Group]
        autoGroup: [Group]
        trainersWithoutGroup: [Trainer]
        traineesWithoutGroup: [Trainee]
    }
`;

export default schema
