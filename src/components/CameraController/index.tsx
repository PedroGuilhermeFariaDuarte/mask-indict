import React, { useState, useEffect, memo } from "react"
import { useDispatch, useSelector } from "react-redux";

// Redux State
import { AllStates } from "../../redux/reducers/";

// Redux Actions
import { AddAutoFocoMode, AddSelectedCamera, AddShowCamera, AddStartAnalyse } from "../../redux/reducers/CameraControllers/actions";

// Components
import Alert from "../Alert";

// Styles
import {
    Container, ContainerIcons, IconActions, ContainerMinimizeAction,
    MinimizeAction
} from "./styles"

// Icons
import CameraOff from "../../icons/CameraOff";
import Eye from "../../icons/Eye";
import Swap from "../../icons/Swap";
import User from "../../icons/User";

interface IActions {
    actions: {
        handlerSetCurrentCamera: Function,
        handlerSetAutoFocosCamera: Function,
        handlerSetCamera: Function
    }
}

function CameraController() {
    const [ showCamera, setShowCamera ] = useState<boolean>(true)
    const [ startAnalyse, setStartAnalyse ] = useState<boolean>(true)
    const [ currentCam, setCurrentCam ] = useState<number>(0)
    const [ minimize, setMinimize ] = useState<boolean>(false)
    const [ alert, setAlert ] = useState<any>()
    const dispatch = useDispatch()

    // Handlers for config
    function handlerSetCurrentCamera(currentCam: number): void {

        if (!showCamera) {
            setAlert(hanlderShowAlert("Alter current cam", "active camera to changer current camera"))
            return;
        }

        setCurrentCam(OldCurrentCam => OldCurrentCam === 0 ? 1 : 0)
        dispatch(AddSelectedCamera({
            currentCam
        }))
    }

    function handlerSetAutoFocosCamera(autoFocosCam: string): void {
        if (!showCamera) {
            setAlert(hanlderShowAlert("Auto Focos mode", "active camera to set auto focos mode"))
            return;
        }
        dispatch(AddAutoFocoMode({
            autoFocosCam
        }))
    }

    function handlerShowCamera() {
        setShowCamera(old => !old)
        dispatch(AddShowCamera({
            showCamera
        }))
    }

    async function handlerStartAnalyse() {

        if (!showCamera) {
            setAlert(hanlderShowAlert("Active camera", "active camera to start analisy"))
            return;
        }
        dispatch(AddStartAnalyse({ startAnalyse }))
        setStartAnalyse(old => !old)
    }

    function handlerMinimizeMenuBar() {
        setMinimize(old => !old)
    }

    function hanlderShowAlert(title: string, message: string) {
        return <Alert title="Notificação do Sistema" message="isso é um teste de alerta" />
    }

    return (<>
        {
            alert && alert
        }

        <Container minimize={minimize}>
            <ContainerMinimizeAction minimize={minimize} onPress={() => handlerMinimizeMenuBar()}>
                <MinimizeAction onPress={() => handlerMinimizeMenuBar()} />
            </ContainerMinimizeAction>
            <ContainerIcons >
                <IconActions minimize={minimize} onPress={() => handlerSetCurrentCamera(currentCam)}>
                    <Swap size={30} color="#79848E" onPress={false} />
                </IconActions >
                <IconActions minimize={minimize} onPress={() => handlerSetAutoFocosCamera("auto")}>
                    <Eye size={30} color="#79848E" onPress={false} />
                </IconActions>
                <IconActions minimize={minimize} onPress={() => handlerStartAnalyse()}>
                    <User size={30} color="#79848E" onPress={false} />
                </IconActions>
                <IconActions minimize={minimize} onPress={() => handlerShowCamera()}>
                    <CameraOff size={30} color="#79848E" onPress={false} />
                </IconActions>
            </ContainerIcons>
        </Container>

    </>)
}

export default memo(CameraController);
