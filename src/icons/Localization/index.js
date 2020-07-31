import React from "react"
import { SimpleLineIcons } from '@expo/vector-icons';

export default ({ size, color, onPress }) => {
    const colorChange = !onPress ?
        color
        :
        "white"

    return <SimpleLineIcons name="location-pin" size={size} color={colorChange} />
}
