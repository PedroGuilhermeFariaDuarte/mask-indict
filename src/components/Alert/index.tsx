import React from "react"


// Components
import { PrimaryTitle, SecundaryTitle } from "../Titles";

// Styles
import { Container, Header, Content } from "./styles";

// Icons
import Notification from "../../icons/Notification";

export default function ALert({ title, message }) {
    return <Container>
        <Header>
            <Notification size={24} color="red" onPress={false} />
            <PrimaryTitle style={{ marginLeft: 20, fontSize: 16, fontWeight: "bold" }}>
                {title}
            </PrimaryTitle>
        </Header>
        <Content>
            <SecundaryTitle style={{ marginLeft: 10, fontSize: 16 }}>
                {message}
            </SecundaryTitle>
        </Content>
    </Container>
}
