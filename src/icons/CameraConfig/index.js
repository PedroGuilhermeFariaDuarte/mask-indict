import React from "react"
import { Feather } from '@expo/vector-icons';

export default ({ size, color, onPress }) => {
    const colorChange = !onPress ?
        color
        :
        "white"

    return <Feather name="camera" size={size} color={colorChange} />
}
