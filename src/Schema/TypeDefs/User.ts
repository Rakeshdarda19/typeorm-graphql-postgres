import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql"
import { type } from "os"


export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString}
    }),
})