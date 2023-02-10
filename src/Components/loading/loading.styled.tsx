import styled, { keyframes } from "styled-components";

export const Rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
export const LoadDiv = styled.div`
    max-width: 400px;
    height: 400px;
    position: relative;
    // background-color: #000;
    display: flex;
    align-items: center;
    justify-content:center;
`

export const LoadingImg = styled.img`
    height: 83px;
    width: 83px;
    animation: ${Rotate} 1s infinite linear;
    // position: absolute;
    // transform: translate(-50%, -50%);
`