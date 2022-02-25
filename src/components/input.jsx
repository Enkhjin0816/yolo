import styled from "styled-components";

const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    box-sizing: border-box;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.16);
    border-radius: 100px;
    outline: none;
    font-size: 20px;
    width: ${({type}) => {
        if(type == "small") {
            return "381px";
        }else {
            return "581px";
        }
    } };
    padding: ${({type}) => {
        if(type == "small") {
            return "12px";
        }else {
            return "20px";
        }
    } };
`

export {Input};