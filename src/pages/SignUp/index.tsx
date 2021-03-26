import React, { useState, useRef } from "react"
import { StackScreenProps } from '@react-navigation/stack';
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { Form } from "@unform/mobile";
import { Text } from "react-native"


// Redux Actions
import { UserActions_addNewUser } from "../../redux/reducers/User/actions";

// Redux Types
import { AllStates } from "../../redux/reducers";

// Router Types
import { RootStackParamList } from "../../routers/types";

// Services
import axios from "../../services/axios"

// Components
import { PrimaryTitle, SecundaryTitle } from "../../components/Titles";
import Alert from "../../components/Alert";

// Components Types
import { MessageAlert } from "../../types"
import { SignUpDataUser } from "../../types/components/SignUp"
import { SignInDataUser } from "../../types/components/SignIn"

// Icons
import Profile from "../../icons/Profile";
import Email from "../../icons/Email";
import Eye from "../../icons/Eye";

// Styles
import {
    Container, ConatinerTitle, ContainerForm,
    ContainerOptions, ContainerTextInput,
    InputField, SubmitFormButton
} from "./styles";

// Schemas
import SchemaSignup from "../../schemas/Form/SignUp";
import SchemaSignin from "../../schemas/Form/SignIn";

// Icons
import User from "../../icons/User";

type Props = StackScreenProps<RootStackParamList, 'SignUp'>;


function SignUp({ navigation }: Props) {
    const [ messageAlert, setMessageAlert ] = useState<MessageAlert>({
        message: "",
        title: ""
    })

    const form = useRef(null)
    const dispatch = useDispatch()

    async function handlerSubmitForm(data: SignUpDataUser) {
        try {
            await SchemaSignup.validate(data, {
                recursive: true
            })

            const coordinates = await hadlerGetPermissionsToLocation()

            console.log(coordinates)
            if (!coordinates) {
                setMessageAlert({
                    title: "Mask Indict",
                    message: "not possible create your account, please retry again"
                })
                return;
            }

            data.localization = {
                type: "Point",
                coordinates: [ ...coordinates ]
            };

            console.log(data)

            const response = await axios.post(`/create/account`, data)

            if (response.data.code != 200) {
                throw new Error(response.data.message)
            }

            const username = response.data.username
            const password = response.data.password

            await handlerSignIn({ username, password })
        } catch (error) {
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

    async function handlerSignIn(data: SignInDataUser) {
        try {
            await SchemaSignin.validate(data, {
                recursive: true
            })

            const response = await axios.get(`/signin/account/${data.username}/${data.password}`)

            if (response.data.code != 200) {
                throw new Error(response.data.message)
            }

            axios.defaults.headers.Authorization = response.data.authorization

            dispatch(UserActions_addNewUser({
                ...response.data.personal,
                authorization: response.data.authorization
            }))
            navigation.navigate("Main")

        } catch (error) {
            setMessageAlert({
                message: error.message,
                title: "Mask Indict"
            })
        }
    }

    async function hadlerGetPermissionsToLocation() {
        try {
            const { status } = await Location.requestPermissionsAsync()

            if (status !== "granted") {
                setMessageAlert({
                    title: "Mask Indict",
                    message: "Not possible get your location"
                })
                return;
            }
            console.log(status)
            return await handlerGetLocation()
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
                accuracy: 0.5,
            })

            console.log(myLocation, "")

            if (!myLocation) {
                setMessageAlert({
                    title: "Mask Indict",
                    message: "not possible getted yout actual location, please retry again!"
                })
                return
            } else {
                setMessageAlert({
                    title: "Mask Indict",
                    message: "your location was getted with success"
                })
            }

            return [ myLocation.coords.latitude, myLocation.coords.longitude ]
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
                <ConatinerTitle>
                    <PrimaryTitle style={{ fontSize: 40, color: "#598CE6" }}>
                        Mask <SecundaryTitle bold>Indict</SecundaryTitle>
                    </PrimaryTitle>
                    <SecundaryTitle style={{ fontSize: 15 }}>your security in all places</SecundaryTitle>
                </ConatinerTitle>
                <ContainerForm>
                    <Form onSubmit={handlerSubmitForm} ref={form}>

                        <ContainerTextInput onPress={() => handlerReadMessageAlert()} >
                            <Profile color="#598CE6" size={24} onPress={false} />
                            <InputField
                                name="username"
                                defaultValue=""
                                placeholder="Digite seu username"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                            />
                        </ContainerTextInput>
                        <ContainerTextInput onPress={() => handlerReadMessageAlert()} >
                            <Profile color="#598CE6" size={24} onPress={false} />
                            <InputField
                                name="password"
                                type="password"
                                defaultValue=""
                                placeholder="Digite sua senha"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                            />
                        </ContainerTextInput>
                        <ContainerTextInput onPress={() => handlerReadMessageAlert()} >
                            <Profile color="#598CE6" size={24} onPress={false} />
                            <InputField
                                name="name"
                                defaultValue=""
                                placeholder="Digite seu nome"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                            />
                        </ContainerTextInput>
                        <ContainerTextInput onPress={() => handlerReadMessageAlert()} >
                            <Email color="#598CE6" size={24} onPress={false} />
                            <InputField
                                name="email"
                                defaultValue=""
                                placeholder="Digite seu e-mail"
                                autoCapitalize="none"
                                type="email"
                                autoCorrect={false}
                                returnKeyType="next"
                                keyBoardType="email-addres"
                            />
                        </ContainerTextInput>

                        <ContainerTextInput onPress={() => handlerReadMessageAlert()} >
                            <Eye color="#598CE6" size={24} onPress={false} />
                            <InputField
                                name="age"
                                defaultValue=""
                                placeholder="Digite sua idade"
                                autoCapitalize="none"
                                type="number"
                                autoCorrect={false}
                                returnKeyType="next"
                            />
                        </ContainerTextInput>
                    </Form>
                    <SubmitFormButton onPress={() => form?.current.submitForm()}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#fff"
                        }}>
                            criar conta
                    </Text>
                    </SubmitFormButton>
                </ContainerForm>
                <ContainerOptions>
                    <Text style={{
                        fontSize: 15,
                        color: "#000"
                    }}>
                        já possuí uma conta? {' '}
                        <Text
                            onPress={() => navigation.navigate("SignIn")}
                            style={{
                                fontSize: 15,
                                fontWeight: "bold",
                                color: "#598CE6"
                            }}>
                            entrar
                    </Text>
                    </Text>
                </ContainerOptions>
            </Container>
        </>
    )
}

export default SignUp;
