import React from "react"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Components
import CameraController from "./components/CameraController"
import Container from "./components/Container"

// Router
import Routers from "./routers"

// Redux
import stored, { persist } from "./redux/stored";

export default function Index() {
    return (
        <>
            <Provider store={stored}>
                <PersistGate persistor={persist}>
                    <Routers />
                </PersistGate>
            </Provider>
        </>
    )
}
