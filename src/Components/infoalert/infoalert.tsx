import React from "react";
import * as C from './infoalert.styled'

type Props = {
    infoText: string,
    image: string
}

const InfoAlert = (props: Props) => {
    return (
        <C.InfoContainer>
            <C.InfoTitle>{props.infoText}</C.InfoTitle>
            <C.InfoImage src={props.image} alt="aprovedImg"></C.InfoImage>
            <C.BackBtn>VOLTAR</C.BackBtn>
        </C.InfoContainer>
    )

}

export default InfoAlert;