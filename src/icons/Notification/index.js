import React from "react"
import { Entypo } from '@expo/vector-icons';

export default ({ size, color, onPress }) => {
    const colorChange = !onPress ?
        color
        :
        "white"

    return <Entypo name="notification" size={size} color={colorChange} />
}
