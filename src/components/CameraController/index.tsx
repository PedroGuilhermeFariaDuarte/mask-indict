import React, { useState, useEffect, memo } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux";

// Redux State
import { AllStates } from "../../redux/reducers/";

// Redux Actions
import { AddAutoFocoMode, AddSelectedCamera, AddShowCamera } from "../../redux/reducers/CameraControllers/actions";

// Styles
import { Container } from "./styles"

interface IActions {
    actions: {
        handlerSetCurrentCamera: Function,
        handlerSetAutoFocosCamera: Function,
        handlerSetCamera: Function
    }
}

function CameraController() {
    const [ showCamera, setShowCamera ] = useState<boolean>(true)
    const [ currentCam, setCurrentCam ] = useState<number>(0)
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
        setShowCamera(old => !old)
        dispatch(AddShowCamera({
            showCamera
        }))
    }

    return <Container>
        {/*
            Replace for Icons
         */}
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => handlerSetCurrentCamera(currentCam)}>
            <Text style={{ color: '#fff' }}>Trocar câmera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => handlerSetAutoFocosCamera("auto")}>
            <Text style={{ color: '#fff' }}>Auto Foco</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => handlerShowCamera()}>
            <Text style={{ color: '#fff' }}>Abrir ou Fechar câmera</Text>
        </TouchableOpacity>
    </Container>
}

export default memo(CameraController);
