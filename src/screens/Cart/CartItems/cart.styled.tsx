import styled from "styled-components";
// width: 746px
type Props = {
    gap?: string;
    flex?: number;
}

export const CartContainer = styled.div`
    background-color: #fff;
    padding: 24px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    gap: 21px;
    border-radius: 4px;

`;

export const ResponsiveItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    // background-color: red;
    // height: 40px;
    gap: 20px;
    display: none;

    @media (max-width: 746px){
        display: flex;
    }
`
export const RPoster = styled.img`
    width: 64px;
    height: 82px;
`

export const Header = styled.div`
    width: 100%;
    display: flex;

    @media (max-width: 746px) {
        display: none
    }
`

export const RSubTotal = styled.div`
    display: flex;
    flex-direction: column;
`

export const RTrash = styled.img`
    width: 16px;
    height: 18px;
`

export const RPrice = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #2F2E41;

`

export const TextHeader = styled.h3<Props>`
    font-weight: 700;
    font-size: 14px;
    
    color: #999999;
    flex: ${props => props.flex};
`

export const Product = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: max-content;
    gap: 100px;

    @media (max-width: 746px){
        display: none;
    }
`

export const DescProd = styled.div<Props>`
    display: flex;
    flex-direction: row;
    gap: ${props => props.gap};
    align-items: center;
    flex: 3;
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

export const Price = styled.h4<Props>`
    font-weight: 700;
    font-size: 16px;
    color: #2F2E41;

`

export const DescMoviePoster = styled.img`
    max-width: 89px;
    height: 114px;
`

export const Qtd = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
`

export const Multiply = styled.img<Props>`
    max-width: 18px;
    height: 18px;
    display: block;
`

export const Input = styled.input<Props>`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 16px;

    max-width: 62px;
    height: 25px;

    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
`

export const Subtotal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 2;
`

export const Trash = styled.img`
    width: 18.31px;
    height: 18px;
    margin: auto 0;
    margin-left: -50px;
`

export const Footer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // background-color:red;

    @media (max-width: 746px){
        flex-direction: column-reverse;
        justify-content: center;
        display: flex;
        align-items: center;
        width: 100%;
        gap: 12px;
    }
`

export const Total = styled.h4`
    font-weight: 700;
    font-size: 24px;
    color: #2F2E41;
`

export const BuyBtn = styled.button`
    background: #009EDD;
    border: none;
    font-family: 'Open Sans';
    color: #fff;
    width: 235.42px;
    height: 40px;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
    cursor: Pointer;
    text-decoration: none;

    @media (max-width: 746px){
        display: block;
        width: 100%;
        font-size: 16px;
        cursor: pointer;
        text-align: center;
    }
`

export const RDesc = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const RFirstLine = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;

`
export const RTitle = styled.h1`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    color: #2F2E41;
`

export const RMultDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const TotalInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    white-space: nowrap;

    @media (max-width: 746px){
        align-items: center;
        justify-content: flex-end;
        width: 100%;
    }

`

export const Line = styled.div`
    height: 1px;
    width: 100%;

    background: #999999;

    /* Inside auto layout */

    flex: none;
    // order: 1;
    align-self: stretch;
    flex-grow: 0;
`



