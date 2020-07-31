import React, { useState, useEffect, useRef } from "react"
import { Alert } from "react-native";
import { Text } from "react-native"
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from "react-redux";

// Assets
import avatar from "../../assets/avatar"

// Redux Actions
import { UserActions_addNewUser } from "../../redux/reducers/User/actions";

// Redux State
import { AllStates } from "../../redux/reducers/";

// Types
import { RootStackParamList } from "../../routers/types";

// Services
import axios from "../../services/axios"

// Components
import { PrimaryTitle, SecundaryTitle } from "../../components/Titles";
import ImageProfile from "../../components/ImageProfile"

// Icons
import Profile from "../../icons/Profile";
import Email from "../../icons/Email";
import Password from "../../icons/Password";
import Localization from "../../icons/Localization";
import Age from "../../icons/Age";

// Styles
import {
    Container,
    ContainerScroll,
    ContainerUser, ContainerHello, ContainerNameSection,
    TitleSection, ContainerForm,
    ContainerTextInput,
    InputField,
    ContainerButtom,
    SubmitFormButton
} from "./styles";


type Props = StackScreenProps<RootStackParamList, 'Profile'>;


function SignIn({ navigation }: Props) {
    const [ user, setUser ] = useState(useSelector((state: AllStates) => state.User))
    const [ newDataUser, setNewDataUser ] = useState({})

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(user)
    }, [ user ])

    async function handlerSubmitForm() {
        try {

            if (!newDataUser) throw new Error("The fields e-mail, name and age is required")

            const response = await axios.put(`/update/account/${user._id}`, newDataUser)

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

            Alert.alert('Success', "Your data was updated")

            // setNewDataUser(old => { })

        } catch (error) {
            Alert.alert("Houve um erro", error.message)
        }
    }


    return <Container>
        <ContainerUser>
            <ImageProfile source={{ uri: avatar.avatar_1.image_url }} />
            <ContainerHello>
                <PrimaryTitle>Olá,</PrimaryTitle>
                <SecundaryTitle bold>{user.name}!</SecundaryTitle>
            </ContainerHello>
        </ContainerUser>
        <ContainerScroll>
            {/* Usuario */}
            <ContainerNameSection>
                <TitleSection bold>Meu dados pessoais</TitleSection>
            </ContainerNameSection>
            <ContainerForm>
                <ContainerTextInput>
                    <Profile color="#598CE6" size={24} onPress={false} />
                    <InputField placeholder="Digite seu novo username" autoCapitalize="none" onChangeText={text => setNewDataUser(old => {
                        return {
                            ...old,
                            username: text
                        }
                    })} />
                </ContainerTextInput>
                <ContainerTextInput>
                    <Password color="#598CE6" size={24} onPress={false} />
                    <InputField placeholder="Digite sua nova senha" autoCapitalize="none" secureTextEntry={true} onChangeText={text => setNewDataUser(old => {
                        return {
                            ...old,
                            password: text
                        }
                    })} />
                </ContainerTextInput>
                <SubmitFormButton onPress={() => handlerSubmitForm()}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#fff"
                    }}>atualizar</Text>
                </SubmitFormButton>
            </ContainerForm>
            {/* Dados pessoais */}
            <ContainerNameSection>
                <TitleSection bold>Meu Usário</TitleSection>
            </ContainerNameSection>
            <ContainerForm>
                <ContainerTextInput>
                    <Profile color="#598CE6" size={24} onPress={false} />
                    <InputField placeholder="Digite seu nome" autoCapitalize="none" defaultValue={user.name} onChangeText={text => setNewDataUser(old => {
                        return {
                            ...old,
                            name: text
                        }
                    })} />
                </ContainerTextInput>

                <ContainerTextInput>
                    <Email color="#598CE6" size={24} onPress={false} />
                    <InputField placeholder="Digite seu e-mail" autoCapitalize="none" defaultValue={user.email} onChangeText={text => setNewDataUser(old => {
                        return {
                            ...old,
                            email: text
                        }
                    })} />
                </ContainerTextInput>

                <ContainerTextInput>
                    <Age color="#598CE6" size={24} onPress={false} />
                    <InputField placeholder="Digite sua idade" defaultValue={user.age?.toString()} onChangeText={text => setNewDataUser(old => {
                        return {
                            ...old,
                            age: parseInt(text)
                        }
                    })} />
                </ContainerTextInput>

                <ContainerTextInput>
                    <Localization color="#598CE6" size={24} onPress={false} />
                    <InputField placeholder="Atualizar localização" editable={false} defaultValue={user?.localization?.coordinates?.toString()} />
                </ContainerTextInput>

                <ContainerButtom>

                    <SubmitFormButton onPress={() => handlerSubmitForm()} >
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#fff"
                        }}>atualizar</Text>
                    </SubmitFormButton>

                    <SubmitFormButton >
                        <Localization color="#fff" size={22} onPress={false} />
                    </SubmitFormButton>
                </ContainerButtom>
            </ContainerForm>
        </ContainerScroll>
    </Container >
}

export default SignIn;
