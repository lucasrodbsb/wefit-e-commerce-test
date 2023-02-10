import styled from 'styled-components'

type Props = {
    flexDirection?: string;
    bgcolor?: string;
    mgBottom?: string;
}

export const HeaderContainer = styled.nav <Props>`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    background-color:${props => props.bgcolor};
    margin-bottom: ${props => props.mgBottom};
    width: 100%;
    height: 74px;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.h1 <Props>`
    font-weight: 700;
    font-size: 20px;
`;

export const Cart = styled.div <Props>`
    background-color:${props => props.bgcolor};
    flex-direction: ${props => props.flexDirection};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
export const CartTitle = styled.h3`
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;

    @media (max-width: 600px) {
        display: none;
    }
`

export const Info = styled.div`
    text-align: right;
`

export const Items = styled.p`
    font-size: 12px;
    color: #999999;
    font-weight: 600;
`

export const Bag = styled.img`
    width: 29.32px;
    height: 25.31px;
`

