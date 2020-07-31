import { combineReducers } from "redux";

// Reducers
import CameraControllers from "./CameraControllers"
import Notifications from "./Notifications"
import TakePicture from "./TakePicture"
import User from "./User"

// Types
import { CameraState } from "./CameraControllers/actions/types"
import { TakePictureState } from "./TakePicture/actions/types"
import { NotificationsState } from "./Notifications/actions/types"
import { UserState } from "./User/actions/types"

export interface AllStates {
    CameraControllers: CameraState
    TakePicture: TakePictureState,
    Notification: NotificationsState,
    User: UserState
}

export const ReducerCameraControllers = CameraControllers

export default combineReducers({
    CameraControllers,
    TakePicture,
    User,
    Notifications
})
