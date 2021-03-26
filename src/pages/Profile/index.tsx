import React, { useState, useEffect, useRef } from "react"
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";
import { Form } from "@unform/mobile";
import { Text } from "react-native"

// Redux Actions
import { UserActions_addNewUser } from "../../redux/reducers/User/actions";

// Redux State
import { AllStates } from "../../redux/reducers/";

// Types
import { RootStackParamList } from "../../routers/types";

// Services
import axios from "../../services/axios"

// Components
import HelloUser from "../../components/HelloUser"
import Alert from "../../components/Alert";

// Components Types
import { MessageAlert } from "../../types"
// Components Types
import { NoCredentialsDataUser, CredentialsDataUser } from "../../types/components/Main"

// Icons
import Profile from "../../icons/Profile"
import Email from "../../icons/Email"
import Password from "../../icons/Password"
import Localization from "../../icons/Localization"
import Age from "../../icons/Age"

// Styles
import {
    Container,
    ContainerScroll,
    ContainerNameSection,
    TitleSection, ContainerForm,
    ContainerTextInput,
    InputField,
    ContainerButtom,
    SubmitFormButton
} from "./styles";

// Schemas
import SchemaUpdate, { SchemaAllDataUser } from "../../schemas/Form/Update";

type Props = StackScreenProps<RootStackParamList, 'Profile'>;


function SignIn({ navigation }: Props) {
    const [ user, setUser ] = useState(useSelector((state: AllStates) => state.User))
    const [ messageAlert, setMessageAlert ] = useState<MessageAlert>({
        message: "",
        title: ""
    })
    const [ location, setLocation ] = useState<Array<Number>>()

    let typeForm: boolean = true

    const formCredentials = useRef(null)
    const formUserdata = useRef(null)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(user)
    }, [ user ])

    async function handlerSubmitForm(data: NoCredentialsDataUser | CredentialsDataUser) {
        try {

            if (typeForm) {
                await SchemaUpdate.validate(data)
            } else {
                await SchemaAllDataUser.validate(data)
            }

            if (location?.length > 0) {
                data = {
                    ...data,
                    localization: {
                        type: "Point",
                        coordinates: [ ...location ]
                    }
                }
            }

            const response = await axios.put(`/update/account/${user._id}`, data)

            if (response.data.code != 200) {
                throw new Error(response.data.message)
            }

            dispatch(UserActions_addNewUser({
                ...response.data.personal,
                authorization: response.data.authorization
            }))

            setUser({
                ...response.data.personal,
                authorization: response.data.authorization
            })

            setMessageAlert({
                message: response.data.message,
                title: "Mask Indict"
            })

        } catch (error) {
            typeForm = false
            setMessageAlert({
                message: error.message,
                title: "Mask Indict"
            })
        }
    }

    function handlerReadMessageAlert() {
        setMessageAlert({
            title: "",
            message: ""
        })
    }

    async function hadlerGetPermissionsToLocation() {
        try {
            const { status } = await Location.requestPermissionsAsync()

            if (status === "granted") {
                await handlerGetLocation()
                return;
            }

            setMessageAlert({
                title: "Mask Indict",
                message: "Not possible get your location"
            })
        } catch (error) {
            setMessageAlert({
                title: "Mask Indict",
                message: error.message
            })
        }

    }

    async function handlerGetLocation() {
        try {

            const myLocation = await Location.getCurrentPositionAsync({
                accuracy: 1,
            })

            setLocation([ myLocation.coords.latitude, myLocation.coords.longitude ])

            console.log(location)

            setMessageAlert({
                title: "Mask Indict",
                message: "your location was uptaded with success"
            })
        } catch (error) {
            setMessageAlert({
                title: "Mask Indict",
                message: error.message
            })
        }
    }

    return (
        <>
            <Container>
                {
                    messageAlert?.title != '' && (<Alert message={messageAlert.message} title={messageAlert.title} callback={handlerReadMessageAlert} />)
                }
                <HelloUser />
                <ContainerScroll>
                    {/* Usuario */}
                    <ContainerNameSection>
                        <TitleSection bold>Meu dados pessoais</TitleSection>
                    </ContainerNameSection>
                    <ContainerForm>
                        <Form onSubmit={handlerSubmitForm} ref={formCredentials}>
                            <ContainerTextInput>
                                <Profile color="#598CE6" size={24} onPress={false} />
                                <InputField name="username" defaultValue="" placeholder="Digite seu novo username" autoCapitalize="none" />
                            </ContainerTextInput>
                            <ContainerTextInput>
                                <Password color="#598CE6" size={24} onPress={false} />
                                <InputField name="password" defaultValue="" placeholder="Digite sua nova senha" autoCapitalize="none" secureTextEntry={true} />
                            </ContainerTextInput>
                        </Form>
                        <SubmitFormButton
                            onPress={() => {
                                if (!typeForm) typeForm = true
                                formCredentials?.current.submitForm()
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: "#fff"
                                }}>
                                atualizar
                            </Text>
                        </SubmitFormButton>
                    </ContainerForm>

                    {/* Dados pessoais */}
                    <ContainerNameSection>
                        <TitleSection bold>Meu Usário</TitleSection>
                    </ContainerNameSection>

                    <ContainerForm>
                        <Form onSubmit={handlerSubmitForm} ref={formUserdata}>
                            <ContainerTextInput>
                                <Profile color="#598CE6" size={24} onPress={false} />
                                <InputField name="name" defaultValue="" placeholder="Digite seu nome" autoCapitalize="none" defaultValue={user.name} />
                            </ContainerTextInput>

                            <ContainerTextInput>
                                <Email color="#598CE6" size={24} onPress={false} />
                                <InputField name="email" defaultValue="" placeholder="Digite seu e-mail" autoCapitalize="none" defaultValue={user.email} />
                            </ContainerTextInput>

                            <ContainerTextInput>
                                <Age color="#598CE6" size={24} onPress={false} />
                                <InputField name="age" defaultValue="" placeholder="Digite sua idade" defaultValue={user.age?.toString()} />
                            </ContainerTextInput>

                            <ContainerTextInput>
                                <Localization color="#598CE6" size={24} onPress={false} />
                                <InputField
                                    name="localization"
                                    placeholder="Atualizar localização"
                                    editable={false}
                                    defaultValue={
                                        !location?.length ?
                                            user?.localization?.coordinates?.toString()
                                            :
                                            location.toString()
                                    }
                                />
                            </ContainerTextInput>

                        </Form>
                        <ContainerButtom>
                            <SubmitFormButton
                                onPress={() => {
                                    if (typeForm) typeForm = false
                                    formUserdata?.current.submitForm()
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#fff"
                                    }}>
                                    atualizar
                                </Text>
                            </SubmitFormButton>

                            <SubmitFormButton onPress={() => hadlerGetPermissionsToLocation()}>
                                <Localization color="#fff" size={22} onPress={false} />
                            </SubmitFormButton>
                        </ContainerButtom>
                    </ContainerForm>
                </ContainerScroll>
            </Container >
        </>
    )
}

export default SignIn;
