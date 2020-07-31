import styled from "styled-components/native"

export const PrimaryTitle = styled.Text`
    font-size:20px;
    font-weight: ${prop => prop.bold ? 'bold' : "normal"};
    color:#79848E;
`

export const SecundaryTitle = styled.Text`
    font-size:35px;
    font-weight: ${prop => prop.bold ? 'bold' : "normal"};
    color:#79848E;
    margin-top:10px;
`
