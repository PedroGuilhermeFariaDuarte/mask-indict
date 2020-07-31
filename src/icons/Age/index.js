import React from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ({ size, color, onPress }) => {
    const colorChange = !onPress ?
        color
        :
        "white"

    return <MaterialCommunityIcons name="moon-new" size={size} color={colorChange} />
}
