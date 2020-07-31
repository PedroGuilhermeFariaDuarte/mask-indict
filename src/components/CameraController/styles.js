import styled, { css } from "styled-components/native"

export const Container = styled.View`
    width:100%;
    height:60px;

    flex-flow:column;
    justify-content:center;
    align-items:center;

    ${prop => prop.minimize === false ? css`
        position:absolute;
        bottom:60px;` : css`
    ;
        background-color:#fff;
       `
    }

    padding:10px;
`

export const ContainerMinimizeAction = styled.TouchableOpacity`
    width:100%;
    height:30px;
    margin-bottom:5px;
    flex-flow:row;
    justify-content:center;
    align-items:center;
`;

export const MinimizeAction = styled.TouchableOpacity`
    width:50px;
    height:4px;
    border-radius:20px;
    background-color:#d5d5d5;
    margin-top:-3px;
`;

export const ContainerIcons = styled.View`
    width:90%;
    height:60px;
    border-radius:50px;
    background-color:#fff;
    padding:10px;

    flex-flow:row;
    justify-content:space-around;
    align-items:center;
`

export const IconActions = styled.TouchableOpacity`
    width:50px;
    height:50px;
    border-radius:25px;
    background-color:#f5f5f5;
    ${prop => prop.minimize === true && css`
        margin-top:-40px;
    ` }

    flex-flow:row;
    justify-content:center;
    align-items:center;
`
