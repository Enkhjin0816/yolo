import styled from "styled-components";

const Text = styled.div`
color: ${({ type }) => {
  if (type == "header") return "#02B589";
  else return "black";
}};
font-size: ${({ size }) => {
  if (size == "xl") return "56px";
  if (size == "lg") return "32px";
  if (size == "md") return "20px";
  if (size == "sm") return "16px";
  if (!size) return "20px";
}};
opacity: ${({ type }) => type == "secondary" && 0.5};
font-weight: ${({type}) => type == "header" ? "bold" : "normal"}
`;
export {Text}