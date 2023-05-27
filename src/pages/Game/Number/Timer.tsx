import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";

function Timer(){
    const [timeElapsed, setTimeElapsed] = useState(0);
    const record = useRef<Number>();
    record.current = timeElapsed;
    useEffect(() => {
        const timer = setInterval(
            () => {setTimeElapsed(timeElapsed=>timeElapsed+30);}, 30);

        return ()=>{
            clearInterval(timer);
        };
    },[]);
    return (
        <Container>
            <Front>{Math.floor(timeElapsed/1000)}초</Front>
            
        </Container>
    );
}

const Container=styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    margin-top: 150px;
`;

const Front=styled.div`
    font-size: 40px;
    font-weight: bold;
`;

const Back=styled.div`
    width:1em;
`;

export default Timer;