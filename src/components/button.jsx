import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ type }) => {
    if (type == "link") return "transparent";
    else return "rgba(2, 181, 137, 1)";
  }};
  color: ${({ type }) => {
    if (type == "link") return "#02B589";
    else return "white";
  }};
  height: 100%;
  font-weight: bold;
  font-size: ${({ type }) => {
    if (type == "link") return "16px";
    else return "32px";
  }};
  border: none;
  border-radius: 100px;
  line-height: 23px;
  padding: 10px ${type => type.long ? '100px' : '0px'};
  text-decoration: ${type => type.link ? 'underline' : 'none'};
`;
export { Button };