import React from "react"
import { Provider } from "react-redux";

// Components
import CameraController from "./components/CameraController"
import Container from "./components/Container"

// Redux
import stored from "./redux/stored";

export default function Index() {
    return (
        <>
            <Provider store={stored}>
                {/*
                Camera and other pages/components
                 */}
                <Container />

                {/* Dont not remove*/}
                <CameraController />
            </Provider>
        </>
    )
}
