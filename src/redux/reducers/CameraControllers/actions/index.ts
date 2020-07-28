import { action } from "typesafe-actions"
import { CameraTypes, CameraData } from "./types";

// Add all infos of camera
export const AddCameraInfo = (data: CameraData) => action(CameraTypes.CameraInfo, data)

// Add permissions
export const AddHasPermission = (data: CameraData) => action(CameraTypes.CameraInfo_hasPermission, data)

// Add permissions
export const AddFacesDetected = (data: CameraData) => action(CameraTypes.CameraInfo_getFaces, data)

// Add permissions
export const AddAutoFocoMode = (data: CameraData) => action(CameraTypes.CameraInfo_setAutoFocosMode, data)

// Add Selected Camera
export const AddSelectedCamera = (data: CameraData) => action(CameraTypes.CameraInfo_setCamera, data)

// Add Selected Camera
export const AddShowCamera = (data: CameraData) => action(CameraTypes.CameraInfo_setShowCamera, data)
