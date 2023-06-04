import { AnimatePresence } from "framer-motion";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import { fastObj, hamburgerTime, practiceMode } from "../../Atom/atom";
import { fadeInOut } from "../../component/kiosk-component/styled_movie";
import { formatTime } from "../Movie_Content/Movie_fx";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { dbService } from "../../Hook/Hook";

const Container = styled(motion.div)`
    display:flex;
    flex-direction: column;
    width: 40rem;
    height:100vh;
    color: white;
    background-color: #faf8f8;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #023282;
    display: flex;
    height: 100%;
    overflow: auto;
`;

const EditBox = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-radius: 10px;
    width: 37rem;
    height: 9rem;
    margin-bottom: 2rem;
    box-shadow:  3px 3px 6px 3px #535261;
`;

const Navbar = styled.nav`
    display: flex;
    margin-right: 30px;
    flex-direction: column;
    height: 100%;
`;

const NavButton = styled.button`
    border-radius: 20px;
    margin:10px;
    width:40px;
    height: 40px;
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
`;

const SubBox = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    padding: 1rem;
`;

const ItemBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width:14vw;
    height:10vh;
    margin: 15px;
    color:black;
    border: 2px solid black;
    box-shadow:  3px 3px 3px 3px rgba(38, 38, 69, 0.3);
    border: none;
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

const EditButton = styled.button`
    height: 3rem;
    width: 3rem;
`;

const QuantityBox = styled(motion.div)`
    display:flex;
    flex-direction: column;
    position:absolute;
    align-items: center;
    background-color: white;
    left:12%;
    right:0;
    top:30%;
    bottom:0;
    width: 30vw;
    height: 20vh;
    box-shadow:  0 0 20px 20px #666666;
    border: none;
    z-index: 5;
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
    background-color: #FF1F41;
    height: 40px;
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

const NextButton3 = styled(NextButton)`
    width: 300px;
    background-color: #0C630F;
    cursor:pointer;
    &:hover{
        background-color: #0a4b0c;
        transition: all ease 0.5s 0s;
    }
    border: 4px dashed transparent;
    animation: ${fadeInOut} 2s infinite;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%; // 수정 필요
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

interface IMenu{
    id: string | undefined;
    category: string | undefined;
    name: string | undefined;
    cost: number | undefined;
    cal: number | undefined;
    quantity: number;
    img: any;
}

const BerverageMenu = [
    {   id: "1",
        category: "Berverages",   
        name: "Coca-cola",
        cost: 2000,
        cal: 120,
        quantity: 1,
    },
    {
        id: "2",
        category: "Berverages",   
        name: "Coca-cola",
        cost: 2000,
        cal: 120,
        quantity: 1,
    },
    {
        id: "3",
        category: "Berverages",   
        name: "Coca-cola",
        cost: 2000,
        cal: 120,
        quantity: 1,
    },
];

const HamburgerMenu = [
    {
        id: "10",
        category: "Hamburger",   
        name: "Cheese burger",
        cost: 4500,
        cal: 420,
        quantity: 1,
    },
    {
        id: "11",
        category: "Hamburger",   
        name: "Cheese burger",
        cost: 4500,
        cal: 420,
        quantity: 1,
    },
    {
        id: "12",
        category: "Hamburger",   
        name: "Cheese burger",
        cost: 4500,
        cal: 420,
        quantity: 1,
    },
];


function Hamburger_last() {
    const navigate = useNavigate();
    const [menu,setMenu] = useState(BerverageMenu);
    const [fastRecoil, setFastRecoil] = useRecoilState(fastObj);
    const [select, setSelect] = useState<IMenu[]>([]);
    const [cost, setCost] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [selectId, setSelectId] = useState<number | null>();
    const [selectMenu, setSelectMenu] = useState<IMenu>();
    const [timer, setTimer] = useRecoilState(hamburgerTime);
    const modeRecoil = useRecoilValue(practiceMode);
    const EditClciked = (item: IMenu, index: string) => {
        setSelectMenu(item);
    };

    const cancleClicked = () => {
        setSelectId(null);
        setQuantity(1);
    };

    const updateData = async (time: number) => {
        try {
          const docId = "c5EkUB47lyWaKnU36b5c";
          const docRef = doc(dbService, 'kiosk-record', docId); 
      
          const docSnap = await getDoc(docRef);
          const data = docSnap.data();
          console.log(data);
  
          await updateDoc(docRef, {
            "data.hamburger.time": arrayUnion(parseInt(((time % 60000) / 1000).toFixed(0)))
          });
          console.log('문서 업데이트 완료');
        } catch (error) {
          console.error('문서 업데이트 중 오류 발생:', error);
        }
      };

    const payClick = () => {
        const endTime = Date.now();
        console.log(formatTime(endTime - timer));
        updateData(endTime - timer);
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
    const okClicked = () => {
            
    };

    const orderClicked = () => {
        navigate("/Menu/home/hard/hamburger/last");
        setFastRecoil({takeout:fastRecoil.takeout, item:select});
    };

    const editClick = (index: number) => {
    };

    const orderSum = () => {
        let total = 0;
        for(let i = 0; i < fastRecoil.item.length; i++){
            total += ((fastRecoil.item[i].cost) as any * fastRecoil.item[i].quantity);
        }
        setCost(total);
    };

    useEffect(()=>{
        orderSum();
    },[]);

    return(
        <AnimatePresence>
            <Container 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{
                duration: 0.5,
            }}}
            exit={{opacity: 0}}>
                <Body>
                    <span style={{marginBottom:"4rem"}}>
                        <h1>주문을 다시 확인해주세요</h1>
                    </span>
                    {fastRecoil.item.map((menu,index) => <EditBox>
                        <SubBox>
                            <h2>{menu.name}</h2>
                            <span style={{color:"#848383"}}>{menu.cal}칼로리</span>
                        </SubBox>
                        <SubBox>
                        <span style={{color:"#848383"}}>
                            <h4>{menu.quantity}개</h4>
                            <h4>{menu.cost as number * menu.quantity}원</h4>
                        </span>
                        </SubBox>
                    </EditBox>)}
                                {selectId && (
                                    <>
                                    <Overlay onClick={overlayClicked}></Overlay>
                                    <QuantityBox  layoutId={`${selectId}`} style={{color:"black"}}>
                                        <h2>더하세요</h2>
                                        <CountBox>
                                        <QuantityButton onClick={minusClicked}>-</QuantityButton>
                                            <div style={{backgroundColor:"#E2E2E2", fontSize:"45px", width:"50px",height:"100%"}}>{quantity}</div>
                                        <QuantityButton onClick={plusClicked}>+</QuantityButton>
                                        </CountBox>
                                        <div style={{}}>
                                            <NextButton onClick={cancleClicked}>취소하기</NextButton>
                                            <NextButton onClick={okClicked}>메뉴에 추가하기</NextButton>
                                        </div>
                                    </QuantityBox>
                                    </>
                                )}
                </Body>
                <Footer>
                    <ResultBox>내 주문: {fastRecoil.takeout} | 상품 수: {fastRecoil.item.length} | 가격: {cost}</ResultBox>
                    <div>
                        <NextButton2 onClick={() => navigate(-1)}>뒤로가기</NextButton2>
                        <NextButton3 onClick={payClick}>결제하기</NextButton3>
                    </div>
                </Footer>
            </Container>
            
            </AnimatePresence>
    );
}

export default Hamburger_last;