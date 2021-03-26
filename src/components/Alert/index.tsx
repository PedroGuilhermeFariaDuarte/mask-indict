import React from "react"


// Components
import { PrimaryTitle, SecundaryTitle } from "../Titles";

// Components Types
import { Alert } from "../../types/components/Alert";

// Styles
import { Container, Header, Content, Footer, ActionButton } from "./styles";

// Icons
import Notification from "../../icons/Notification";

export default function ALert({ title, message, callback }: Alert) {
    return <Container>
        <Header>
            <Notification size={24} color="#598CE6" onPress={false} />
            <PrimaryTitle style={{ marginLeft: 10, fontSize: 16, fontWeight: "bold" }}>
                {title}
            </PrimaryTitle>
        </Header>
        <Content>
            <SecundaryTitle style={{ marginLeft: 10, fontSize: 16 }}>
                {message}
            </SecundaryTitle>
        </Content>
        <Footer>
            <ActionButton onPress={() => callback()}>
                OK
            </ActionButton>
        </Footer>
    </Container>
}
