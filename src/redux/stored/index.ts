import { createStore, Store } from "redux"
import { persistStore } from "redux-persist";

// Redux Persist
import ReduxPersist from "../persist";

// Reactotron integrate
import Reactotron from "../../config/Reactotron";

import rootReducer from "../reducers"

const store: Store = createStore(ReduxPersist(rootReducer), Reactotron?.createEnhancer())

export const persist = persistStore(store)
export default store
