import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width:100%;
    height:100%;
    background:#E9ECF7;
    padding-top:100px;

    flex-flow:column;
    justify-content:center;
    align-items:center;
`

export const ContainerScroll = styled.ScrollView`
    width:100%;
    height:100%;
    padding:10px;
    border-radius:60px;
    margin-bottom:15px;
`
export const Today = styled.Text`
    font-size:18px;
    font-weight:bold;
    color:#79848E;
    margin:20px;
`

export const Description = styled.Text`
    font-size:14px;
    color:#79848E;
`

export const ConatinerNotification = styled.TouchableOpacity`
    width:100%;
    height:90px;
    border-radius:40px;
    margin-bottom:10px;
    background-color:#fff;
    overflow:hidden;
    margin-bottom:40px;

    flex-flow:column;
`

export const NotificationHeader = styled.View`
    width:100%;
    height:auto;
    padding:5px;
    padding-left:35px;

    flex-flow:row;
    align-items:center;
`

export const NotificationContent = styled.View`
    width:100%;
    height:100%;
    padding:10px;
    padding-left:35px;

    flex-flow:row;
`
