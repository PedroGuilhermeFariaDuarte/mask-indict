import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
    width:100%;
    height:100%;
    background-color:#E9ECF7;
    flex-flow:column;
`

export const ContainerUser = styled.View`
    width:100%;
    height:325px;
    border-bottom-left-radius:30px;
    border-bottom-right-radius:30px;
    background-color:#fff;
    padding:10px;
    padding-top:100px;
`

export const ContainerHello = styled.View`
    width: 100%;
    height:auto;
    margin-top:50px;
`

export const TitleSection = styled.Text`
    font-size:25px;
    font-weight: ${prop => prop.bold ? 'bold' : "normal"};
    color:#79848E;
    margin-top:10px;
`

export const Description = styled.Text`
    font-size:17px;
    font-weight: ${prop => prop.bold ? 'bold' : "normal"};
    color:#79848E;
    margin-top:10px;
`

export const SubDescription = styled.Text`
    font-size:14px;
    font-weight: ${prop => prop.bold ? 'bold' : "normal"};
    color:#B9BCC2;
    margin-top:5px;
`

export const ContainerNameSection = styled.View`
    width:100%;
    height:auto;
    padding:10px;
    padding-left:15px;
    margin-top:40px;
    margin-bottom:40px;
`

export const ContainerScrolls = styled.ScrollView`
    width:100%;
    height:auto;
    border-top-left-radius:30px;
    border-top-right-radius:30px;
    margin-bottom:20px;
`

export const ContainerActions = styled.ScrollView`
    width:100%;
    height:auto;
    border-top-left-radius:30px;
    border-top-right-radius:30px;
`

export const CardContent = styled.View`
    width:100%;
    height:auto;
    margin-bottom:30px;

    flex-flow:row;
    justify-content:space-between;
`

export const Card = styled.TouchableOpacity`
    width:220px;
    height:250px;
    border-radius:30px;
    padding:10px;
    margin-right:30px;
    background-color:#ffff;

    flex-flow:column;
    justify-content:space-between;
`
export const CardHeader = styled.View`
    width:100%;
    height:auto;
    padding:10px;
`

export const CardFooter = styled.View`
    width:100%;
    height:auto;
    padding:10px;
    flex-flow:column;
`

