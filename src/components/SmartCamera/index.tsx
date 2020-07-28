import React, { useState, useEffect, memo, useRef } from "react"
import { Vibration } from "react-native"
import { Camera, CameraMountError, FaceDetectionResult } from "expo-camera"
import * as FaceDetector from "expo-face-detector"
import { useDispatch, useSelector, shallowEqual } from "react-redux";

// Redux Actions
import { AddHasPermission, AddFacesDetected } from "../../redux/reducers/CameraControllers/actions";

// Redux State
import { AllStates, ReducerCameraControllers } from "../../redux/reducers";

// Components
import User from "../Container"

const SmartCamera: React.FC = () => {
    const cameraInfo = useSelector((state: AllStates) => state.CameraControllers)
    const [ hasPermission, setHasPermission ] = useState(cameraInfo.hasPermission)
    const [ , autoFocosCam ] = useState(cameraInfo.autoFocosCam)
    const [ cameraIsReady, setCameraIsReady ] = useState<boolean>(true)
    const [ cameraError, setCameraError ] = useState<boolean>(false)
    const dispatch = useDispatch()

    // Get permissions
    useEffect(() => {
        async function handlerSetPermissions() {
            if (hasPermission !== "granted") {
                const { status } = await Camera.requestPermissionsAsync()
                setHasPermission(status)
            }
        }
        handlerSetPermissions()
        console.log("Reducer Camera info", cameraInfo)
    }, [ cameraInfo ])

    // Verify permissions
    useEffect(() => {
        if (hasPermission === "granted") {
            console.log(hasPermission)
            //cameraInfo.hasPermission = hasPermission
            dispatch(AddHasPermission({
                hasPermission: hasPermission
            }))
        }
    }, [ hasPermission ])

    // Set prop AutoFocus
    useEffect(() => { Camera.Constants.AutoFocus = autoFocosCam }, [ autoFocosCam ])

    // Handlers for errors
    function handlerGetErrorCamera(messageError: CameraMountError): void {
        setCameraError(true);
        setCameraIsReady(false)
        console.log(messageError.message)
    }

    function handlerCameraIsReady(): void {
        Vibration.vibrate([ 100, 60 ]);
    }

    // Get faces
    function handlerGetFaceInCamera(faceDetected: FaceDetectionResult) {
        if (faceDetected.faces.length !== 0) dispatch(AddFacesDetected({
            faceDetected
        }));
    }

    return (cameraIsReady &&
        cameraError === false) ? (
            <Camera
                style={{ flex: 1 }
                }
                type={cameraInfo.currentCam}
                onCameraReady={handlerCameraIsReady}
                onMountError={handlerGetErrorCamera}
                useCamera2Api={true}
                onFacesDetected={handlerGetFaceInCamera}
                faceDetectorSettings={{
                    mode: FaceDetector.Constants.Mode.accurate,
                    detectLandmarks: FaceDetector.Constants.Landmarks.all,
                    runClassifications: FaceDetector.Constants.Classifications.none,
                    minDetectionInterval: 100,
                    tracking: true,
                }}
            />
        )
        :
        (<User />)
}

export default memo(SmartCamera);
