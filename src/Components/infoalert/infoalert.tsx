import React from "react";
import * as C from './infoalert.styled'
import { Link } from "react-router-dom";

type Props = {
    infoText: string,
    image: string
}

const InfoAlert = (props: Props) => {
    return (
        <C.InfoContainer>
            <C.InfoTitle>{props.infoText}</C.InfoTitle>
            <C.InfoImage src={props.image} alt="aprovedImg"></C.InfoImage>
            <Link to='/'>
                <C.BackBtn>VOLTAR</C.BackBtn>
            </Link>
        </C.InfoContainer>
    )

}

export default InfoAlert;