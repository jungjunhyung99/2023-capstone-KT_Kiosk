import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";
import { useRecoilState } from "recoil";
import { BerverageMenu, HamburgerMenu } from "../Cafe_Content/data";
import { IFastItem, fastObj } from "../../Atom/atom";
import Bigmac from "../../images/BigMac.png";
import { FlexBox, HamburgerImageBox, ImageBox, MenuBox } from "../../component/kiosk-component/styled_kiosk";
import { MenuCal, MenuCost, MenuTitle } from "../../component/kiosk-component/styled_hamburger";
import { menuFadeInOut } from "../../component/kiosk-component/styled_movie";

const Container = styled(motion.div)`
    display:flex;
    flex-direction: column;
    height:100vh;
    width: 40rem;
    background-color: #faf8f8;
`;

const Body = styled.div`
    display:flex;
    height:100%;
`;

const Navbar = styled.nav`
    display: flex;
    margin-right: 2em;
    flex-direction: column;
    height: 100%;
`;

const NavButton = styled(motion.button)`
    border-radius: 3em;
    margin:10px;
    width:1.5em;
    height: 1.5em;
    font-size: 30px;
    border:none;
    background-color: #9e9b9b;
    color: white;
    cursor: pointer;
`;

const MenuContainer = styled(motion.div)`
  display: flex;  
  flex-direction: column ;
  width:100%;
  align-items: center;
`;

const Menu = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 100%;
    height: 50%;
    @media screen and (max-width: 500px){
    grid-template-columns: repeat(1,1fr);
    }
`;

const ItemBox = styled(motion.div)<{index: number}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15rem;
    height:15rem;
    margin: 15px;
    color:black;
    border: 2px solid black;
    background-color: white;
    cursor: pointer;
    box-shadow:  3px 3px 3px 3px rgba(38, 38, 69, 0.3);
    border: 2px dashed transparent;
        ${(props) => 
        props.index === 0 &&
        css`
        border-color: red;
        animation: ${menuFadeInOut} 2s infinite;
      `};

`;

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:15%;
    color: black;
`;

const ResultBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:99%;
    height:40px;
    border: 3px solid black;
`;

const CountBox = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:200px;
    height: 60px;
    
`;

const QuantityBox = styled(motion.div)`
    display:flex;
    flex-direction: column;
    position:absolute;
    align-items: center;
    background-color: white;
    left:35%;
    right:0;
    top:30%;
    bottom:0;
    width: 30vw;
    height: 20vh;
    box-shadow:  0 0 20px 20px #666666;
    border: none;
    z-index: 5;
    @media screen and (max-width: 1300px){
      height: 20em;
    }
`;

const QuantityButton = styled(motion.button)`
    border-radius: 5px;
    font-size: 45px;
    width: 60px;
    height: 100%;
    border: none;
    background-color:#DFDDDD;
    cursor: pointer;
    
`;

const NextButton = styled.button`
    width: 200px;
    height: 40px;
    background-color:#FF1F41;
    border: none;
    color: white;
    margin:10px;
    box-shadow:  0 2px 4px 0px #666666;
    cursor:pointer;
    &:hover{
        background-color: #ac0921;
        transition: all ease 0.5s 0s;
    }
`;

const NextButton2 = styled.button`
    width: 300px;
    background-color: #666666;
    height: 40px;
    border: none;
    color: white;
    margin:10px;
    box-shadow:  0 2px 4px 0px #666666;
    cursor:pointer;
`;

const NextButton3 = styled(NextButton)<{isActive:boolean}>`
    width: 300px;
    background-color: ${(props) => props.isActive ?  "FF1F41" : "#666666"};
    cursor:pointer;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%; // 수정 필요
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  
`;

interface IMenu {
    id: string | undefined;
    category: string | undefined;
    name: string | undefined;
    cost: number | undefined;
    cal: number | undefined;
    quantity: number;
    img: any;
}



function Hamburger_choice() {
    const navigate = useNavigate();
    const [menu,setMenu] = useState(BerverageMenu);
    const [fastRecoil, setFastRecoil] = useRecoilState(fastObj);
    const [select, setSelect] = useState<IFastItem[]>([]);
    const [selectId, setSelectId] = useState<number | null>();
    const [selectMenu, setSelectMenu] = useState<IFastItem | null>();
    const [quantity, setQuantity] = useState(1);
    const [cost, setCost] = useState(0);
    const NavClick = (name: string) => {
        if(name === "A"){
            setMenu(BerverageMenu);
        }
        else if(name === "B"){
            setMenu(HamburgerMenu);
        }
        else if(name === "C"){
            setMenu(HamburgerMenu);
        }
    }
    const BoxClicked = (menu:IMenu, index:string) => {
        setSelectMenu(menu);
        setSelectId(parseInt(index));
    };
    const overlayClicked = () => {
        setSelectId(null);
        setQuantity(1);
    };
    const plusClicked = () => {
        setQuantity((prev) => prev+1);
    };
    const minusClicked = () => {
        if(quantity === 1) return;
        setQuantity((prev) => prev-1);
    };
    const cancleClicked = () => {
        setSelectMenu(null);
        setSelectId(null);
        setQuantity(1);
    };
    const okClicked = () => {
        const obj = {
        id: selectMenu?.id,
        category: selectMenu?.category,
        name: selectMenu?.name,
        cost: selectMenu?.cost,
        cal: selectMenu?.cal,
        quantity: quantity,
        img: selectMenu?.img
        };
        orderSum(obj?.cost, quantity);
        setSelectMenu(obj);
        setSelect((prev)=>[...prev,obj]);
        setSelectId(null);
        setQuantity(1);
    };

    const orderSum = (price: number | undefined, quantity: number) => {
        setCost((prev)=> prev + (price! * quantity));
    }

    const orderClicked = () => {
        navigate("/kiosk/hamburger/last");
        setFastRecoil({takeout:fastRecoil.takeout, item:select});
    };
    return(
            <Container initial={{opacity: 0}}
            animate={{opacity: 1, transition:{
                duration: 0.5,
            }}}
            exit={{opacity: 0}}>
                <Body>
                    <Navbar>
                        <NavButton onClick={()=>NavClick("A")}>A</NavButton>
                        <NavButton onClick={()=>NavClick("B")}>B</NavButton>
                    </Navbar>
                    <MenuContainer>
                            <h1 style={{color:"black", fontSize:"2em"}}>
                                {menu[0].category} 
                            </h1><br/>
                        <Menu>
                            {menu.map((menu, index:number) => 
                            <ItemBox 
                            key={menu.id} layoutId={menu.id} onClick={()=>BoxClicked(menu,menu.id as string)} index={index}
                            >
                                <MenuBox>
                                    <HamburgerImageBox image={menu.img}/>
                                    <MenuTitle>{menu.name}</MenuTitle>
                                    <MenuCost>{menu.cost}원</MenuCost>
                                    <MenuCal>{menu.cal} cal</MenuCal>
                                </MenuBox>
                            </ItemBox>)}
                            <AnimatePresence>
                                {selectId && (
                                    <>
                                    <Overlay onClick={overlayClicked}></Overlay>
                                    <QuantityBox key={selectId} layoutId={`${selectId}`} style={{color:"black"}}>
                                        <h2>수량을 선택해주세요</h2>
                                        <CountBox>
                                        <QuantityButton onClick={minusClicked}>-</QuantityButton>
                                            <div style={{display:"flex",justifyContent:"center",backgroundColor:"#E2E2E2", fontSize:"45px", width:"50px",height:"100%"}}>{quantity}</div>
                                        <QuantityButton onClick={plusClicked}>+</QuantityButton>
                                        </CountBox>
                                        <div style={{}}>
                                            <NextButton onClick={cancleClicked}>취소하기</NextButton>
                                            <NextButton onClick={okClicked}>메뉴에 추가하기</NextButton>
                                        </div>
                                    </QuantityBox>
                                    </>
                                )}
                            </AnimatePresence>    
                        </Menu>
                    </MenuContainer>
                </Body>
                <Footer>
                    <ResultBox>내 주문: {fastRecoil.takeout}| 상품 수: {select.length} | 가격: {cost}</ResultBox>
                    <div>
                        <NextButton2 onClick={() => navigate(-1)}>뒤로가기</NextButton2>
                        <NextButton3 onClick={orderClicked} isActive={select.length!==0}>주문완료</NextButton3>
                    </div>
                </Footer>
            </Container>
    );
}

export default Hamburger_choice;