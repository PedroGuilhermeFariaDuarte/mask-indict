import styled from "styled-components/native"
import Input from "../../components/Input";

export const Container = styled.SafeAreaView`
    width:100%;
    height:100%;
    background-color:#E9ECF7;
    flex-flow:column;
`

export const ContainerScroll = styled.ScrollView`
    width:100%;
    height:100%;
    margin-bottom:1px;
`

export const ContainerNameSection = styled.View`
    width:100%;
    height:auto;
    padding:10px;
    padding-left:15px;
    margin-top:40px;
    margin-bottom:40px;
`
export const TitleSection = styled.Text`
    font-size:20px;
    font-weight: ${prop => prop.bold ? 'bold' : "normal"};
    color:#79848E;
    margin-top:10px;
`

export const ContainerForm = styled.View`
    width:100%;
    height:auto;
    padding:30px;
    border-radius:30px;
    background-color:#fff;
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

export const InputField = styled(Input)`
    width:100%;
    height:100%;
    border:none;
    margin-left:15px;
`

export const ContainerButtom = styled.View`
    width:100%;
    height:auto;
    padding:40px;
    flex-flow:row;
    justify-content:center;
    align-items:center;
`

export const SubmitFormButton = styled.TouchableOpacity`
    width:70%;
    height:50px;
    border-radius:50px;
    background:#598CE6;
    margin:5px;
    flex-flow:row;
    justify-content:center;
    align-items:center;
`
