import React from "react"
import { AntDesign } from '@expo/vector-icons';

export default ({ size, color, onPress }) => {
    const colorChange = !onPress ?
        color
        :
        "white"

    return <AntDesign name="eyeo" size={size} color={colorChange} />
}
