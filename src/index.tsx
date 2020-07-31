import React from "react"
import { Provider } from "react-redux";

// Components
import CameraController from "./components/CameraController"
import Container from "./components/Container"

// Router
import Routers from "./routers"

// Redux
import stored from "./redux/stored";

export default function Index() {
    return (
        <>
            <Provider store={stored}>
                <Routers />
            </Provider>
        </>
    )
}
