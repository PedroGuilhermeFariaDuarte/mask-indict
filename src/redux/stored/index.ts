import { createStore, Store } from "redux"

// Types
import { CameraState } from "../reducers/CameraControllers/actions/types"

import rootReducer from "../reducers"

export interface ApplicationState {
    CameraController: CameraState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store
