import styled from "styled-components";
import KTLogo from "../images/ktLogo2.svg"
import GameIcon from "../images/GameIcon.svg";
import MapIcon from "../images/MapIcon.svg";
import KioskIcon from "../images/KisokImage.svg";

export const BackCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    background-color: #2BB7B3;
    height: 17rem;
    width: 100%;
    border-radius: 0px 0px 300px 300px;
`;

export const BackCircle2 = styled.div`
    position: absolute;
    background-color: #31CECA;
    height: 100%;
    width: 100%;
    border-radius: 20px 20px 300px 300px;
`;

export const CircleConatiner = styled.div`
    position: relative;
    height: 30rem;
`;

export const ContentClickBox = styled.div`
    display:flex;
    padding-left: 1.5rem;
    width: 40rem;
    gap: 2rem;
    height: 10rem;
    justify-content: center;
    align-items: center;
    border: 3px solid black;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0px 1px 2px 1px gray;
    cursor: pointer;
`;

export const ContentTitle = styled.span`
    font-weight: 800;
    font-size: 2rem;
`;

export const ContentDescript = styled.span`
    color: #545252;
    font-weight: 600;
    padding-top: 0.5rem;
    font-size: 1.2rem;
`;

export const ContentTextBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction  : column;
    flex-wrap: wrap;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transform: translateY(-30%);
    justify-content: center;
    align-items: center;
`;

export const KTImage = styled.div`
    position: relative;
    right: 3rem;
    width:10rem;
    height: 10rem;
    border-radius: 3rem;
    background-size:cover;
    background-image: url(${KTLogo});
`;

export const GameImage = styled.div`
    width: 9rem;
    height: 6rem;
    background-image: url(${GameIcon});
    background-size: cover;
`;

export const KioskImage = styled.div`
    width: 9rem;
    height: 8.5rem;
    background-image: url(${KioskIcon});
    background-size: cover;
`;

export const MapImage = styled.div`
    width: 9rem;
    height: 7.5rem;
    background-image: url(${MapIcon});
    background-size: cover;
`;

export const LogoTitle = styled.div`
    font-size: 4.5rem;
    font-weight: 800;
    color:white;
`;