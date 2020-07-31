// Actions Types
export enum TakePictureTypes {
    TakePictures_AddInTime = "@takePictures/add-time",
    TakePictures_take = "@takePictures/add-picture",

}

// Data Types
export interface TakePictureData {
    time: NodeJS.Timeout,
    uri?: String
    width?: String | Number,
    height?: String | Number,
    base64?: String | Number
}

// State Types
export interface TakePictureState {
    time: NodeJS.Timeout,
    uri?: String
    width?: String | Number,
    height?: String | Number,
    base64?: String | Number
}
