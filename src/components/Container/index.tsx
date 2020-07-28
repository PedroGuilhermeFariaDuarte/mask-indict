import React, { memo } from "react"
import { SafeAreaView, Text, } from "react-native"
import { useSelector } from "react-redux";

// Redux
import { AllStates } from "../../redux/reducers";

// Components
import Camera from "../SmartCamera"

// Assete
import avatar from "../../assets/avatar"

// Styles
import { ContainerMain, ImageProfile } from "./styles"

const Container: React.FC = () => {
    const cameraInfo = useSelector((state: AllStates) => state.CameraControllers)

    return <SafeAreaView style={{ flex: 1 }}>
        {
            cameraInfo.showCamera ? (<Camera />) : (
                <ContainerMain>
                    {/* Like a Google Meet with camera in off */}
                    <ImageProfile source={{ uri: avatar.avatar_1.image_url }} />
                    <Text style={{ color: "#fff" }}>Camera desligada</Text>
                </ContainerMain>
            )
        }
    </SafeAreaView>
}

export default memo(Container)
