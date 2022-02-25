import styled from "styled-components";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: ${({ vertical }) => {
    if (vertical === "start") return "flex-start";
    if (vertical === "end") return "flex-end";
    if (vertical === "center") return "center";
    if (vertical === "between") return "space-between";
    if (vertical === "around") return "space-around";
  }};
  height: ${({height}) => height};
  gap: ${({ gap }) => gap};
  align-items: ${({ horizantal }) => {
    if (horizantal == "start") return "start";
    if (horizantal == "center") return "center";
    if (horizantal == "end") return "end";
  }};
`;
export { Stack };