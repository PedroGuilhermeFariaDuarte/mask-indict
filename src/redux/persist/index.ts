import { persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";


export default (reducers: any) => {
    const persistRededucer = persistReducer(
        {
            key: "MaskIndict",
            storage: AsyncStorage,
            whitelist: [ "User", "CameraController", "Notifications" ],
        },
        reducers
    );

    return persistRededucer;
};
