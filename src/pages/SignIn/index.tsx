import React, { useState } from "react"
import { Text, Alert } from "react-native"
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch } from "react-redux";


// Redux Actions
import { UserActions_addNewUser } from "../../redux/reducers/User/actions";

// Types
import { RootStackParamList } from "../../routers/types";

// Services
import axios from "../../services/axios"

// Components
import { PrimaryTitle, SecundaryTitle } from "../../components/Titles";

// Icons
import Profile from "../../icons/Profile";
import Password from "../../icons/Password";

// Styles
import {
    Container, ConatinerTitle, ContainerForm,
    ContainerOptions, ContainerTextInput,
    InputField, SubmitFormButton
} from "./styles";


type Props = StackScreenProps<RootStackParamList, 'SignIn'>;


function SignIn({ navigation }: Props) {
    const [ username, setUsername ] = useState<String>("")
    const [ password, setPassword ] = useState<String>("")
    const dispatch = useDispatch();

    async function handlerSubmitForm() {
        try {
            if (username.trim() == "" || password.trim() == "") throw new Error("Preencha todos os campos")

            const response = await axios.get(`/signin/account/${username}/${password}`)

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
            Alert.alert("Houve um erro", error.message)
        }
    }

    return <Container>
        <ConatinerTitle>
            <PrimaryTitle style={{ fontSize: 40, color: "#598CE6" }}>
                Mask <SecundaryTitle bold>Indict</SecundaryTitle>
            </PrimaryTitle>
            <SecundaryTitle style={{ fontSize: 15 }}>your security in all places</SecundaryTitle>
        </ConatinerTitle>
        <ContainerForm>
            <ContainerTextInput>
                <Profile color="#598CE6" size={24} onPress={false} />
                <InputField placeholder="Digite seu username" autoCapitalize="none" onChangeText={text => setUsername(old => text)} />
            </ContainerTextInput>
            <ContainerTextInput>
                <Password color="#598CE6" size={24} onPress={false} />
                <InputField placeholder="Digite sua senha" autoCapitalize="none" secureTextEntry={true} onChangeText={text => setPassword(old => text)} />
            </ContainerTextInput>
            <SubmitFormButton onPress={() => handlerSubmitForm()}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#fff"
                }}>entrar</Text>
            </SubmitFormButton>
        </ContainerForm>
        <ContainerOptions>
            <Text style={{
                fontSize: 15,
                color: "#000"
            }}>não tem uma conta? <Text style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "#598CE6"
            }}>criar conta</Text></Text>
        </ContainerOptions>
    </Container>
}

export default SignIn;
