import { createStore, Store, StoreEnhancer } from "redux"

// Reactotron integrate
import Reactotron from "../../config/Reactotron";

// Types
import { CameraState } from "../reducers/CameraControllers/actions/types"

import rootReducer from "../reducers"

export interface ApplicationState {
    CameraController: CameraState
}


const store: Store = createStore(rootReducer)

export default store
