import React, { MutableRefObject } from "react";
import { FaceDetectionResult } from "expo-camera"

// Actions Types
export enum CameraTypes {
    CameraInfo = "@camera/add-info",
    CameraInfo_hasPermission = "@camera/add-permission",
    CameraInfo_getFaces = "@camera/add-faces",
    CameraInfo_setCamera = "@camera/add-camera",
    CameraInfo_setAutoFocosMode = "@camera/add-autofocos",
    CameraInfo_setShowCamera = "@camera/add-show-camera",
}

// Data Types
export interface CameraData {
    faceDetected?: FaceDetectionResult,
    hasPermission?: string,
    currentCam?: number,
    autoFocosCam?: string,
    showCamera?: boolean
}

// State Types
export interface CameraState {
    faceDetected?: FaceDetectionResult,
    hasPermission?: string,
    currentCam?: number,
    autoFocosCam?: string,
    showCamera?: boolean
}
