import React from "react";
import * as C from './loading.styled'
import loader from '../../assets/images/Loader.png'

const Loading = () => {
    return(
        <>
        <C.LoadDiv>
            <C.LoadingImg src={loader} alt="Loading..." /> 
        </C.LoadDiv>
        </>
    )
}

export default Loading;