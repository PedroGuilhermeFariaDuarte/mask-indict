import { NotificationsState } from "./actions/types"
import { Reducer } from "redux"
import { produce } from "immer";

const INITIAL_STATE: NotificationsState = {
    notification: [ { teste: "teste" } ]
}

const reducer: Reducer<NotificationsState> = (state = INITIAL_STATE, action) => {
    return produce(state, (draft: NotificationsState) => {

        switch (action.type) {
            case "@notificationAction/add-notification":
                draft.notification?.push(action.payload.notification)
                break
            default:
                return state
        }
    })
}

export default reducer
