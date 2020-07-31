import { action } from "typesafe-actions"
import { TakePictureTypes, TakePictureData } from "./types";

// Add time control to take picture
export const AddTakePicturesInTime = (data: TakePictureData) =>
    action(TakePictureTypes.TakePictures_AddInTime, data)

// Add a data picture
export const AddTakePictures = (data: TakePictureData) =>
    action(TakePictureTypes.TakePictures_take, data)
