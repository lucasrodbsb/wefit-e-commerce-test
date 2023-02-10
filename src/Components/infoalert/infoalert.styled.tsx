import styled from 'styled-components';

export const InfoContainer = styled.div`
    background-color: #fff;
    width: 100%;
    height: 600px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    border-radius: 4px;
    padding: 34px;
`;

export const InfoImage = styled.img`
    width: auto;
    height: 307px;
`;

export const InfoTitle = styled.h1`
    font-weight: 700;
    font-size: 20px;
    color: #2F2E41;
    text-align: center;
`;

export const BackBtn = styled.button`
    width: 180px;
    height: 40px;
    border: none;
    background: #009EDD;
    border-radius: 4px;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    font-family: 'Open Sans';
    cursor: pointer;
`;