import React from "react";
import styled from "styled-components";

function Cell({num, handleClick}: any){
    return (
    <Container onClick={()=>handleClick(num)}>
        {(num!=0)?num:null}
    </Container>
    );
}

const Container=styled.div`
    border:2px solid green;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:40px;
    font-weight: bold;
    position:relative;
    width: 100px;
    height: 100px;
    left: 0px;
    top: 50px;
    background-color: #D4F4FA;
`;

export default Cell;