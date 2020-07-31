import React, { memo } from "react"
import { SafeAreaView, Text, } from "react-native"
import { useSelector } from "react-redux";

// Redux
import { AllStates } from "../../redux/reducers";

// Components
import Camera from "../SmartCamera"

// Pages
import Main from "../../pages/Main"

// Styles
import { ContainerMain, ImageProfile } from "./styles"

const Container: React.FC = () => {
    const cameraInfo = useSelector((state: AllStates) => state.CameraControllers)

    return <>{
        cameraInfo.showCamera ? (<Camera />) : (
            <ContainerMain>
                {/* Like a Google Meet with camera in off */}
                <Main />
            </ContainerMain>
        )
    }</>

}

export default memo(Container)
