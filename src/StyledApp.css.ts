import styled from 'styled-components';

export const StyledWrapper = styled.div`
    background-color: rgb(255, 255, 255);
    border-radius: 2px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 24px;
    width: 100%;
    `;


export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    `;


export const StyledInput = styled.input`
    display: none;
`;

export const StyledLabel = styled.label`
    display: block;
    margin-top: 10px;
    text-align: center;
    line-height: 150%;
    font-size: .85em;
    cursor: pointer;
    text-shadow: rgb(255 255 255) 0px 0px 0px;
    color: rgb(34, 34, 34);
    font-size: 14px;
    box-sizing: border-box;
    outline: none;
    border-radius: 2px;
    height: 44px;
    text-decoration: none;
    color: black;
    border: 2px solid rgb(121,69,145);
    &.active {
        background: rgb(121,69,145);
        color: white;
        border: none;

    }
`;

export const StyledLeftColumn = styled.div`
    background-color: rgb(255,255,255);
    border-radius: 2px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 24px;
    padding: 10px;
`;

export const StyledRightColumn = styled.div`
    background-color: rgb(255,255,255);
    border-radius: 2px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 24px;
    margin-left: 20px;
`;