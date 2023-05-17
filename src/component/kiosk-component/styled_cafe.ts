import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CafeContainer = styled(motion.div)`
    display:flex;
    flex-direction: column;
    width: 65%;
    background-color: white;
    height: 100vh;
`;

export const MenuContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    align-items: center;
`;

export const OrderSlider = styled(motion.div)`
  display: flex; 
  width: 27vw;
`;

export const Head = styled.div`
  display: flex;
  flex-direction  : column;
  background-color: #212020;
  margin-bottom: 20px;
`;

export const Info = styled(motion.div)`
  padding: 10px;
  opacity: 0;
  position: absolute;
  background-color: "#2F2F2F";
  bottom: 0;
  h4 {
    font-size: 18px;
  }
`;

export const Box = styled(motion.div)<{bgphoto: string}>`
    background-image: url(${(props)=>props.bgphoto});
    background-size: cover;
    height: 60%;
    width: 60%;
    font-size: 30px;
    cursor: pointer;
    background-position: center center;
    margin: 0 auto;
    border: 2px solid;
`;

export const SmallBox = styled(motion.div)<{bgphoto: string}>`
    background-image: url(${(props)=>props.bgphoto});
    background-size: cover;
    height: 70px;
    width: 70px;
    font-size: 66px;
    cursor: pointer;
    background-position: center center;
    border: 2px solid;
`;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3,1fr);
  margin: 0 40px;
  height: 80vh;
`;

export const Order = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  
`;

export const Ul =styled.ul`
  display: flex;
  list-style: none;
  width: 90%;
  margin: 0 auto;
  padding-inline-start: 0px;
`;

export const Li = styled.li`
  display:flex;
  justify-content: center;
  border: 3px solid white;
  width: 25%;
  margin: 5px;  
  font-size: 20px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

export const Button = styled.button`
    border-radius: 40px;
    height: 2rem;
    font-size: 25px;
    margin: 0px 10px;
    cursor: pointer;
`;

export const QuantityButton = styled(Button)`
    height: 1.5rem;
    font-size: 20px;
    border-radius: 100px;
`;

export const boxVariant = {
    initial: {
        scale:1,
    },
    hover: {
        scale: 1.3,
        transition: {
            delay: 0.5,
            duration: 0.1,
            type: "tween",
        },
    },
};

export const smboxVariant = {
    initial: {
        opacity:0,
    },
    end: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.1,
            type: "tween",
        },
    },
};

export const XButton = styled(motion.button)`  
    position: relative;
    left:80%;
    bottom:90%;
    border-radius: 5em;
    font-weight: 700;
    width:2em;
    height:2em;
    cursor: pointer;
`;

export const rowVariants = {
    hidden: {
      x: window.outerWidth + 5,
    },
    visible: {
      x: 0,
    },
    exit: {
      x: -window.outerWidth - 5,
    },
  };

  export const StyledLink = styled(Link)`
    text-decoration: none;
    color:white;
    font-weight: 800;
    &:focus, &hover, &:visited, &:link, &active{
        text-decoration: none;
    }
  `;

  export const CafeHomeButton = styled.button`
    width: 4rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: #666666;
    color: white;
    border: none;
    font-weight: 700;
  `;

export const CafePayDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const CafeCostDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:white;
  height:100%;
  align-items:center; 
  width: 5.5vw
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalButton = styled.button<{active: boolean}>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ active }) => (active ? '#333' : '#ccc')};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


export interface Ikiosk {
    id: string;
    sub: string;
    img: any;
    name: string;
    cost: number;
    selected: boolean;
    quantity: number;
    category: string;
}

export interface ICondiment{
    name: string;
    quantity: number;
}

export interface IItem{
    in: ICondiment[];
    not_in: ICondiment[];
};

export interface IPay {
    store: string;
    level: string;
    basket: ICondiment[];
};
