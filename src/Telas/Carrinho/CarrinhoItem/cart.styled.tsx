import styled from "styled-components";

type Props = {
    gap?: string
}

export const CartContainer = styled.div`
    background-color: #fff;
    padding: 24px;
    width: 100%;
    // height: 286px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 21px;
    border-radius: 4px;

`;

export const CartInfosArea = styled.div`
    display: flex;
    flex-direction; row;
    // align-items: center;
    justify-content: space-around;
    width: 100%;
    height: max-content;
    gap: 100px;
    // background-color: red;

`

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const DescTitle = styled.h3`
    font-weight: 700;
    font-size: 14px;
    color: #999999;
`

export const DescProd = styled.div<Props>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${props => props.gap};
    align-items: center;

`

export const TitlePrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Title = styled.h3`
    font-weight: 700;
    font-size: 14px;
    color: #2F2E41;
    white-space: nowrap;
`

export const Price = styled.h4`
    font-weight: 700;
    font-size: 16px;
    color: #2F2E41;
`

export const DescMoviePoster = styled.img`
    max-width: 89px;
    height: 114px;
`


//-------------

export const Qtd = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

`

export const Multiply = styled.img`
    max-width: 18px;
    height: 18px;
`

export const Input = styled.input`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 16px;

max-width: 62px;
height: 26px;

background: #FFFFFF;
border: 1px solid #D9D9D9;
border-radius: 4px;
`

export const Subtotal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Trash = styled.img`
    width: 18.31px;
    height: 18px;
    margin: auto 0;
`