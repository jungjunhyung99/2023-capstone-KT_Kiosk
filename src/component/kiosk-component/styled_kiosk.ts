import styled from "styled-components";
import KTIcon from "../../images/KTLogo3.svg"

export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    position: absolute;
    background-color: #2BB7B3;
    height: 10rem;
    width: 100%;
    border-radius: 0px 0px 100px 100px;
`;

export const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageBox = styled.div<{image: any}>`
    width: 9rem;
    height: 7rem;
    background-image: url(${(props) => props.image});
    background-size: cover;
`;

export const KioskContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transform: translateY(-50%);
    justify-content: center;
    align-items: center;
`;

export const PrevButton = styled.button`
    width: 15rem;
    height: 4rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 2rem;
    background-color: #FF7A00;
    border:none;
    box-shadow: 0px 1px 2px 1px gray;
    margin-left: 2rem;
    cursor: pointer;
`;

export const NextButton = styled(PrevButton)`
    background-color: #FF0000;
    margin-left: 0rem;
    margin-right: 2rem;
`;

export const KTLogo = styled.div`
    position: relative;
    right: 3rem;
    width:10rem;
    height: 10rem;
    border-radius: 3rem;
    background-size:cover;
    background-image: url(${KTIcon});
    path{
            fill: white;
    }
`;