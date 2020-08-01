import React, { useState, useEffect } from "react";
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector } from "react-redux";

// Redux State
import { AllStates } from "../../redux/reducers/index";

// Types
import { RootStackParamList } from "../../routers/types";

// Assets
import avatar from "../../assets/avatar"

// Components
import ImageProfile from "../../components/ImageProfile";
import {
    PrimaryTitle,
    SecundaryTitle,
} from "../../components/Titles";
import SmartCamera from "../../components/SmartCamera"
import CameraController from "../../components/CameraController"

// Icons
import Notification from "../../icons/Notification";
import Profile from "../../icons/Profile";
import CameraConfig from "../../icons/CameraConfig";

// Styles
import {
    Container, ContainerHello, ContainerUser, ContainerActions,
    ContainerNameSection, TitleSection, CardContent,
    Card, CardHeader, CardFooter, Description,
    SubDescription, ContainerScrolls
} from "./styles";

type Props = StackScreenProps<RootStackParamList, 'Main'>;

function Main({ navigation }: Props) {
    const [ user, setUser ] = useState(useSelector((state: AllStates) => state.User))
    const cameraInfo = useSelector((state: AllStates) => state.CameraControllers)
    useEffect(() => {
        console.log(user)
    }, [ user ])

    return <>
        {
            cameraInfo.showCamera ? (<SmartCamera />) : (
                <Container>
                    <ContainerUser>
                        <ImageProfile source={{ uri: avatar.avatar_1.image_url }} />
                        <ContainerHello>
                            <PrimaryTitle>Olá,</PrimaryTitle>
                            <SecundaryTitle bold>{user.name}!</SecundaryTitle>
                        </ContainerHello>
                    </ContainerUser>
                    <ContainerNameSection>
                        <TitleSection bold>Tarefas</TitleSection>
                    </ContainerNameSection>
                    <ContainerScrolls>
                        <ContainerActions horizontal={true}>
                            <Card onPress={() => navigation.navigate("Notification")}>
                                <CardHeader>
                                    <Notification size={32} color="#598CE6" onPress={false} />
                                </CardHeader>
                                <CardFooter>
                                    <Description bold>
                                        Notificações
                                    </Description>
                                    <SubDescription>
                                        16 Notificações
                                    </SubDescription>
                                </CardFooter>
                            </Card>
                            <Card onPress={() => navigation.navigate("Profile")}>
                                <CardHeader>
                                    <Profile size={32} color="#598CE6" onPress={false} />
                                </CardHeader>
                                <CardFooter>
                                    <Description bold>
                                        Meu Perfil
                                     </Description>
                                    <SubDescription>
                                        Altere nome, idade...
                                        </SubDescription>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CameraConfig size={32} color="#598CE6" onPress={false} />
                                </CardHeader>
                                <CardFooter>
                                    <Description bold>
                                        Ajustes
                                </Description>
                                    <SubDescription>
                                        Configure sua câmera
                                </SubDescription>
                                </CardFooter>
                            </Card>
                        </ContainerActions>
                        <ContainerNameSection>
                            <TitleSection bold>Outras opções</TitleSection>
                        </ContainerNameSection>
                        <ContainerActions horizontal={true}>
                            <Card>
                                <CardHeader>
                                    <Notification size={32} color="#598CE6" onPress={false} />
                                </CardHeader>
                                <CardFooter>
                                    <Description bold>
                                        Notificações
                                </Description>
                                    <SubDescription>
                                        16 Notificações
                                 </SubDescription>
                                </CardFooter>
                            </Card>
                        </ContainerActions>
                    </ContainerScrolls>
                    {!cameraInfo.showCamera && (<CameraController />)}
                </Container>
            )
        }
        {cameraInfo.showCamera && (<CameraController />)}
    </>

}

export default Main;
