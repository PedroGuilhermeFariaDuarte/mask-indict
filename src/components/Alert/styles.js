import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width:100%;
    height:auto;
    border-radius:30px;
    border:1px solid #E9ECF7;
    background-color:#fff;
    padding:10px;
    position:absolute;
    bottom:20px;
    z-index:100;

    flex-flow:column;
`

export const Header = styled.View`
    width:100%;
    height:50px;
    padding-left:10px;

    flex-flow:row;
    align-items:center;
`

export const Content = styled.View`
    width:100%;
    height:100px;
`

export const Footer = styled.View`
    width:100%;
    height:auto;

    flex-flow:row;
    justify-content:flex-end;
    align-items:center;
`

export const ActionButton = styled.Text`
    width:50px;
    height:auto;
    font-size:14px;
    font-weight:bold;
    color:#598CE6;
`
