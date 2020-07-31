import React, { useState, useEffect, memo, RefObject } from "react"
import { Camera, CameraMountError, FaceDetectionResult } from "expo-camera"
import * as FaceDetector from "expo-face-detector"
import { Vibration } from "react-native"

// Redux
import { useDispatch, useSelector, shallowEqual } from "react-redux";

// Redux Actions
import { AddHasPermission, AddFacesDetected } from "../../redux/reducers/CameraControllers/actions";
import { AddTakePicturesInTime } from "../../redux/reducers/TakePicture/actions";

// Redux State
import { AllStates } from "../../redux/reducers";

// Components
import User from "../Container"

// Services
import ServiceTakePicture from "../../services/takePicture";
import axios from "../../services/axios";

const SmartCamera: React.FC = () => {
    const cameraInfo = useSelector((state: AllStates) => state.CameraControllers)
    const TakePicture = useSelector((state: AllStates) => state.TakePicture)

    const [ hasPermission, setHasPermission ] = useState(cameraInfo.hasPermission)
    const [ startAnalyse, setStartAnalyse ] = useState(cameraInfo.startAnalyse)
    const [ autoFocosCam ] = useState(cameraInfo.autoFocosCam)
    const [ cameraIsReady, setCameraIsReady ] = useState<boolean>(true)
    const [ cameraError, setCameraError ] = useState<boolean>(false)
    const [ cameraRef, setCameraRef ] = useState<any>()

    let completedRequest: boolean = true

    const dispatch = useDispatch()

    // Get permissions and other
    useEffect(() => {
        async function handlerSetPermissions() {
            if (hasPermission !== "granted") {
                const { status } = await Camera.requestPermissionsAsync()
                setHasPermission(status)
            }
        }
        handlerSetPermissions()
        setStartAnalyse(cameraInfo.startAnalyse)
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

    // Start send images
    useEffect(() => {
        if (startAnalyse == false) {
            console.log("Stoping send of data image")
            clearInterval(TakePicture.time)
        } else {
            const intervalID = setInterval(async () => {
                const analyse = await handlerSendDataImage();
                if (analyse) {
                    console.log("Analyse completed")
                }
            }, 5000, { completedRequest })
            dispatch(AddTakePicturesInTime({ time: intervalID }))
            console.log("Starting send of data image")
        }
    }, [ startAnalyse ]);

    // Call a service
    async function handlerSendDataImage() {
        try {
            if (completedRequest) {
                completedRequest = false;
                console.log("await analyse - ",
                    `Analyse completed: ${completedRequest}`
                )

                const responseServiceTakePicture = await ServiceTakePicture(cameraRef, dispatch)

                if (responseServiceTakePicture.code == 200) {
                    console.log("Analyse was a success", responseServiceTakePicture.message)
                    completedRequest = true;
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }

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
                ref={ref => setCameraRef(ref)}
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
