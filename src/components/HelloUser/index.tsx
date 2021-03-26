import React, { useState } from "react";
import { useSelector } from "react-redux";

// Redux State
import { AllStates } from "../../redux/reducers/index";

// Assets
import avatar from "../../assets/avatar"

// Components
import ImageProfile from "../../components/ImageProfile";
import {
    PrimaryTitle,
    SecundaryTitle,
} from "../../components/Titles";

// Styles
import {
    ContainerHello, ContainerUser
} from "./styles";


function HelloUser() {
    const [ user, setUser ] = useState(useSelector((state: AllStates) => state.User))

    return <ContainerUser>
        <ImageProfile source={{ uri: avatar.avatar_1.image_url }} />
        <ContainerHello>
            <PrimaryTitle>Olá!,</PrimaryTitle>
            <SecundaryTitle bold>{user.name}</SecundaryTitle>
        </ContainerHello>
    </ContainerUser>
}

export default HelloUser
