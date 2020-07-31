import React, { useState, useEffect, memo } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux";

// Redux State
import { AllStates } from "../../redux/reducers/";

// Redux Actions
import { AddAutoFocoMode, AddSelectedCamera, AddShowCamera, AddStartAnalyse } from "../../redux/reducers/CameraControllers/actions";

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
    const [ , setCurrentCam ] = useState<number>(0)
    const [ minimize, setMinimize ] = useState<boolean>(false)
    const dispatch = useDispatch()

    // Handlers for config
    function handlerSetCurrentCamera(currentCam: number): void {
        setCurrentCam(OldCurrentCam => OldCurrentCam === 0 ? 1 : 0)
        dispatch(AddSelectedCamera({
            currentCam
        }))
    }

    function handlerSetAutoFocosCamera(autoFocosCam: string): void {
        dispatch(AddAutoFocoMode({
            autoFocosCam
        }))
    }

    function handlerShowCamera() {
        dispatch(AddShowCamera({
            showCamera
        }))
        setShowCamera(old => !old)
    }

    async function handlerStartAnalyse() {
        dispatch(AddStartAnalyse({ startAnalyse }))
        setStartAnalyse(old => !old)
    }

    function handlerMinimizeMenuBar() {
        setMinimize(old => !old)
    }

    return <Container minimize={minimize}>
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
        {/*
            Replace for Icons
         */}
        {/* <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => handlerSetCurrentCamera(currentCam)}>
            <Text style={{ color: '#fff' }}>Trocar câmera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => handlerSetAutoFocosCamera("auto")}>
            <Text style={{ color: '#fff' }}>Auto Foco</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => handlerStartAnalyse()}>
            <Text style={{ color: '#fff' }}>Inicar analise</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => handlerShowCamera()}>
            <Text style={{ color: '#fff' }}>Abrir ou Fechar câmera</Text>
        </TouchableOpacity> */}
    </Container>
}

export default memo(CameraController);
