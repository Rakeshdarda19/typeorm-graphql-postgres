import { UserType } from "../TypeDefs/User"
import { GraphQLList } from 'graphql'
 import { Users } from "../../Entities/User"
export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find()
    }
}