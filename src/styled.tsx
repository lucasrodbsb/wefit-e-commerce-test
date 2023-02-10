import styled from 'styled-components'
// import {createGlobalStyle} from "styled-components"
import './assets/fonts/fonts.css'

type Props = {
    flexDirection?: string;
    bgcolor?: string;
    mgBottom?: string;
}

// export default createGlobalStyle`
// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box; 
//   }
//   body {
//     background-color: #2F2E41;
//   }
// `;

export const Area = styled.div <Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color:${props => props.bgcolor};
    max-width: 960px;
    margin: 0 auto;
    margin-bottom: ${props => props.mgBottom};
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    position: relative;

    @media (max-width: 960px) {
        width: calc(100% - 30px);
    }
    `;