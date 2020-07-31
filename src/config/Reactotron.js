import { AsyncStorage } from "react-native";
import Reactotron, { ReactotronReactNative } from "reactotron-react-native";

// Redux Integration
import { reactotronRedux } from "reactotron-redux";



export default Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .use(reactotronRedux())
    .useReactNative()
    .connect()


