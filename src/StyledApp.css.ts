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
    align-items: center;
    `;


export const StyledInput = styled.input`
    display: none;
`;

export const StyledLabel = styled.label`
    &.active {
        background: rgb(121,69,145);
        cursor: pointer;
        text-shadow: rgb(255 255 255) 0px 0px 0px;
        color: rgb(34, 34, 34);
        font-size: 14px;
        box-sizing: border-box;
        outline: none;
        border: none;
        margin: 0px;
        cursor: pointer;
        border-radius: 2px;
        height: 44px;
        min-width: 44px;
        width: auto;
        text-decoration: none;
        color: white
    }
`;
