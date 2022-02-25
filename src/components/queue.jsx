import styled from "styled-components";

// vertical = "strat" || "center" || "end"
// horizantal = "start" || "end" || "center" || "between" || "around"

const Queue  =  styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
    justify-content: ${({horizantal}) => {
        if(horizantal === "start") return "start";
        if(horizantal === "end") return "end";
        if(horizantal === "center") return "center";
        if(horizantal === "between") return "space-between";
        if(horizantal === "around") return "space-around";
    }};
    width: 100%;
    gap: ${({gap}) => gap};
    align-items:  ${({vertical}) => {
        if(vertical == "start") return "start";
        if(vertical == "center") return "center";
        if(vertical == "end") return "end";
    }};
`;

export {Queue};