import { UserState } from "./actions/types"
import { Reducer } from "redux"

const INITIAL_STATE: UserState = {
    _id: "",
    age: 0,
    email: "",
    localization: {
        _id: "",
        coordinates: [],
        type: "",
    },
    name: "",
    authorization: "",
    createdAt: "",
    updatedAt: ""
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "@userAction/add-user":
            return {
                ...state,
                _id: action.payload._id,
                age: action.payload.age,
                email: action.payload.email,
                localization: action.payload.localization,
                name: action.payload.name,
                authorization: action.payload.authorization,
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt,

            }
        default:
            return state
    }
}

export default reducer
