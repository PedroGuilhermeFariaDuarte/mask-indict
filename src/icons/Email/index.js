import React from "react"
import { Fontisto } from '@expo/vector-icons';

export default ({ size, color, onPress }) => {
    const colorChange = !onPress ?
        color
        :
        "white"

    return <Fontisto name="email" size={size} color={colorChange} />
}

