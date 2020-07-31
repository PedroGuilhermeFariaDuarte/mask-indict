import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
    width:100%;
    height:100%;
    padding:10px;
    background:#E9ECF7;

    flex-flow:column;
    justify-content:center;
    align-items:center;
`
export const ConatinerTitle = styled.View`
    width:100%;
    height:auto;
    margin-bottom:50px;

    flex-flow:column;
    justify-content:center;
    align-items:center;
`

export const ContainerForm = styled.View`
    width:100%;
    height:auto;
    padding:10px;

    flex-flow:column;
    justify-content:center;
    align-items:center;
`

export const ContainerOptions = styled.View`
    width:100%;
    height:auto;
    padding:10px;

    flex-flow:row;
    justify-content:center;
    align-items:center;
`
export const ContainerTextInput = styled.View`
    width:100%;
    height:60px;
    border-radius:60px;
    border:1px solid #79848E;
    padding:5px;
    padding-left:40px;
    margin-bottom:20px;
    background:#fff;
    flex-flow:row;
    justify-content:center;
    align-items:center;
`

export const InputField = styled.TextInput`
    width:100%;
    height:100%;
    border:none;
    margin-left:15px;
`

export const SubmitFormButton = styled.TouchableOpacity`
    width:70%;
    height:50px;
    border-radius:50px;
    background:#598CE6;

    flex-flow:row;
    justify-content:center;
    align-items:center;
`
