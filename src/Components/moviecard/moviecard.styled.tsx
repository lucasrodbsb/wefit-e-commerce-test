import styled from "styled-components";

type Props = {
    posterFilm?: string,
    bgColor?: string
}

export const MovieArea = styled.div <Props>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 11px;
    gap: 6px;
    width: 309.33px;
    // height: 305px;
    flex-direction:column;

    background: #FFFFFF;
    border-radius: 4px;

    flex: none;
    order: 0;
    flex-grow: 1;
`;

export const Poster = styled.img <Props>`
    width: 147px;
    height: 188px;
`;

export const MovieTitle = styled.h2 <Props>`
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    color: #333333;
    
`;

export const MoviePrice = styled.h4 <Props>`
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color:#2F2E41;
`;

export const AddMovieBtn = styled.button<Props>`
    all: unset;
    width: 100%;
    background-color: ${props => props.bgColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
`;

export const BtnText = styled.p`
    font-weight: 700;
    font-size: 12px;
    // line-height: 16px;
    text-align: center;
`;

export const CartImg = styled.img`
    height: 11.90000057220459px;
    width: 11.424001693725586px;
`;

export const LeftDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
`

export const NumItems = styled.p`
    font-weight: 400;
    font-size: 12px;
`