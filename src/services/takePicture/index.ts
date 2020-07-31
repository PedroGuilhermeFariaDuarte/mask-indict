import FormData from "form-data"
import { EncodingType, readAsStringAsync, getContentUriAsync } from "expo-file-system"

// Redux Actions
import { AddTakePictures } from "../../redux/reducers/TakePicture/actions/index";

// Services
import axios from "../axios"

export default async (cameraReference: any, dispatch: any) => {

    const dataImage = await cameraReference.takePictureAsync({
        quality: 1,
        base64: true
    });

    if (!dataImage) {
        throw new Error("Not possible take your picture")
    }

    dispatch(AddTakePictures({ ...dataImage }))
    // console.log(useSelector((state: AllStates) => state.TakePicture))

    console.log("Image Data", dataImage)
    return await handlerSetRequest(dataImage)
}

async function handlerSetRequest(data: any) {
    const response = await axios.post("/image/intelligence/analyze", {
        imageAnalyse: data.base64
    },
    )

    if (response.status != 200) {
        return {
            code: 10,
            message: response.statusText
        }
    }

    return response.data
}
