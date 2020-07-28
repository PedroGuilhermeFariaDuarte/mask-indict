import { CameraState } from "./actions/types"
import { Reducer } from "redux"
import { FaceDetectionResult } from "expo-camera"

const INITIAL_STATE: CameraState = {
    faceDetected: {
        faces: []
    },
    hasPermission: '',
    currentCam: 0,
    autoFocosCam: 'none',
    showCamera: false
}

const reducer: Reducer<CameraState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "@camera/add-info":
            return {
                ...state,
                faceDetected: action.payload.faceDetected,
                hasPermission: action.payload.hasPermission,
                currentCam: action.payload.currentCam,
                autoFocosCam: action.payload.autoFocosCam,
            }
        case "@camera/add-permission":
            console.log("@camera/add-permission " + action.payload.hasPermission)
            return { ...state, hasPermission: action.payload.hasPermission }
        case "@camera/add-faces":
            return { ...state, faceDetected: action.payload.faceDetected }
        case "@camera/add-camera":
            console.log("@camera/add-camera " + action.payload.currentCam)
            return { ...state, currentCam: action.payload.currentCam }
        case "@camera/add-autofocos":
            console.log("@camera/add-autofocos " + action.payload.autoFocosCam)
            return { ...state, autoFocosCam: action.payload.autoFocosCam }
        case "@camera/add-show-camera":
            console.log("@camera/add-show-camera " + action.payload.showCamera)
            return { ...state, showCamera: action.payload.showCamera }
        default:
            return state
    }
}

export default reducer
