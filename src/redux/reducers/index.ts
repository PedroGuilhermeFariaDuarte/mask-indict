import { combineReducers } from "redux";

// Reducers
import CameraControllers from "./CameraControllers"

// Types
import { CameraState } from "./CameraControllers/actions/types"

export interface AllStates {
    CameraControllers: CameraState
}

export const ReducerCameraControllers = CameraControllers

export default combineReducers({
    CameraControllers
})
