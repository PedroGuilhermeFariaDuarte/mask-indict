import { TakePictureState } from "./actions/types"
import { Reducer } from "redux"

const INITIAL_STATE: TakePictureState = {
    time: setInterval(() => { }, 1000),
    uri: "",
    width: "",
    height: "",
    base64: ""
}

const reducer: Reducer<TakePictureState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "@takePictures/add-time":
            return { ...state, time: action.payload.time };
        case "@takePictures/add-picture":
            return {
                ...state, uri: action.payload.uri,
                width: action.payload.width,
                height: action.payload.height,
                base64: action.payload.base64
            }
        default:
            return state
    }
}

export default reducer
