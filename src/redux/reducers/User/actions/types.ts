// Actions Types
export enum UserActions {
    UserActions_addUser = "@userAction/add-user",
}

// Data Types
export interface UserData {
    _id?: String,
    age?: Number,
    email?: String,
    localization?: {
        _id?: String,
        coordinates?: Number[],
        type?: String,
    },
    name?: String,
    authorization?: String,
    createdAt?: String,
    updatedAt?: String

}

// State Types
export interface UserState {
    _id?: String,
    age?: Number,
    email?: String,
    localization?: {
        _id?: String,
        coordinates?: Number[],
        type?: String,
    },
    name?: String,
    authorization?: String,
    createdAt?: String,
    updatedAt?: String
}
