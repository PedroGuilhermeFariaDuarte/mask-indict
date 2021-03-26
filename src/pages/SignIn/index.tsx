import React, { useState, useRef, useEffect } from "react"
import { StackScreenProps } from '@react-navigation/stack';
import { Text } from "react-native"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { Form } from "@unform/mobile";


// Redux Actions
import { UserActions_addNewUser } from "../../redux/reducers/User/actions";

// Redux Types
import { AllStates } from "../../redux/reducers";

// Types
import { RootStackParamList } from "../../routers/types";

// Services
import axios from "../../services/axios"

// Components
import { PrimaryTitle, SecundaryTitle } from "../../components/Titles";
import Alert from "../../components/Alert";

// Components Types
import { MessageAlert } from "../../types"

// Icons
import Profile from "../../icons/Profile";
import Password from "../../icons/Password";

// Styles
import {
    Container, ConatinerTitle, ContainerForm,
    ContainerOptions, ContainerTextInput,
    InputField, SubmitFormButton
} from "./styles";

// Schemas
import SchemaSignin from "../../schemas/Form/SignIn";

// Icons
import User from "../../icons/User";

type Props = StackScreenProps<RootStackParamList, 'SignIn'>;


function SignIn({ navigation }: Props) {
    const [ myUser, setMyUser ] = useState(useSelector((state: AllStates) => state.User))
    const [ messageAlert, setMessageAlert ] = useState<MessageAlert>({
        message: "",
        title: ""
    })

    const form = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (myUser.authorization != "") {
            navigation.navigate("Main")
        }
    }, [ myUser ])

    async function handlerSubmitForm(data: { username: string, password: string }) {
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

    function handlerReadMessageAlert() {
        setMessageAlert({
            title: "",
            message: ""
        })
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
                            <Password color="#598CE6" size={24} onPress={false} />
                            <InputField
                                name="password"
                                defaultValue=""
                                placeholder="Digite sua senha"
                                autoCapitalize="none"
                                secureTextEntry={true}
                                type="password"
                                autoCorrect={false}
                                returnKeyType="send"
                            />
                        </ContainerTextInput>
                    </Form>
                    <SubmitFormButton onPress={() => form?.current.submitForm()}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#fff"
                        }}>
                            entrar
                    </Text>
                    </SubmitFormButton>
                </ContainerForm>
                <ContainerOptions>
                    <Text style={{
                        fontSize: 15,
                        color: "#000"
                    }}>
                        não tem uma conta? {' '}
                        <Text
                            onPress={() => navigation.navigate("SignUp")}
                            style={{
                                fontSize: 15,
                                fontWeight: "bold",
                                color: "#598CE6"
                            }}>
                            criar conta
                    </Text>
                    </Text>
                </ContainerOptions>
            </Container>
        </>
    )
}

export default SignIn;
