import { action } from "typesafe-actions"
import { UserActions, UserData } from "./types";

// Add a user
export const UserActions_addNewUser = (data: UserData) => action(UserActions.UserActions_addUser, data)
