import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { CafeAnswer, IAtomCafe, ICafe, cafeObj, cafeTime, practiceMode } from "../../Atom/atom";
import { Box, Button, CafeContainer, CafeCostDiv, CafeHomeButton, CafePayDiv, Head, IItem, IPay, Ikiosk, Li, MenuContainer, Order, OrderSlider, QuantityButton, Row, SmallBox, StyledLink, Ul, XButton, boxVariant, rowVariants, smboxVariant } from "../../component/kiosk-component/styled_cafe";
import { useEffect, useState } from "react";
import { cafeItem, cafeItem2, cafeItem3 } from "./data";
import { AnimatePresence } from "framer-motion";
import GameNav from "../Navbar/GameNav";
import Modal from "./Modal";
import { formatTime } from "../Movie_Content/Movie_fx";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { dbService } from "../../Hook/Hook";
import { Overlay } from "../../component/game-component/balloon-component";
import { ModalCompleteButton, ModalNavBar, MovieExplain, TimeTakenDiv } from "../../component/kiosk-component/styled_movie";
import AnimatedText from "../AnimatedText";

const offset = 4;

function Cafe_index () {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [modeRecoil,setModeRecoil] = useRecoilState(practiceMode);
    const [modalMatch, setModalMatch] = useState(true);
    const [menuRecoil,SetMenuRecoil] = useRecoilState<IAtomCafe[]>(cafeObj);
    const [menu, setKiosk] = useState<Ikiosk[]>(cafeItem);
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [cost, setCost] = useState(0);
    const [choice, setChoice] = useState<Ikiosk[]>([]);
    const [focus,setFocus] = useState(0);
    const [send, setSend] = useState<IPay>();
    const [condiment,setCondiment] = useState<IItem>();
    const [resultPrint, setResultPrint] = useState(false);
    const [timeTaken, setTimeTaken] = useRecoilState(cafeTime);
    const answer = useRecoilValue<ICafe[]>(CafeAnswer);
    const [timer, setTimer] = useRecoilState(cafeTime);
    const toggleLeaving = () => setLeaving((prev) => !prev);
    const onBackClick = () => navigate(-1);
    const increaseIndex = (array:Ikiosk[]) => {
        if (array){
            if(leaving) return;
            //toggleLeaving();
            const totalKiosk = array.length - 1;
            const maxIndex = Math.floor(totalKiosk / offset);
            setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
            setFocus(maxIndex);
        }
    };

    const onListClicked = (num:Number) => {
        {num == 1 ? setKiosk(cafeItem) : num == 2 ? setKiosk(cafeItem2) : setKiosk(cafeItem3) }
    };

    const onBoxClicked = (objId: string, array:Ikiosk) => {
        setShowModal(true);
        const boxCopy = choice;
        console.log(boxCopy);
        for(let i = 0; i < choice.length; i++){
            if(boxCopy[i].id === objId){
                boxCopy[i].quantity++;
                setChoice([...boxCopy]);
                const costCopy = cost;
                setCost(costCopy + array.cost);
                return ;
            }
        }
        //navigate(`/Menu/explain/${objId}/selection`);
        const costCopy = cost;
        setChoice((prev)=>[...prev,array]);
        setCost(costCopy + array.cost);
    };

    const onPlusClicked = (objId : string, array:Ikiosk) => {
        const boxCopy = choice;
        for(let i = 0; i < choice.length; i++){
            if(boxCopy[i].id === objId){
                boxCopy[i].quantity++;
                setChoice([...boxCopy]);
                const costCopy = cost;
                setCost(costCopy + array.cost);
                return ;
            }
        }
    };

    const onMinusClicked = (objId : string, array:Ikiosk) => {
        const boxCopy = choice;
        if(array.quantity === 1){
            return;
        }
        for(let i = 0; i < choice.length; i++){
            if(boxCopy[i].id === objId){
                boxCopy[i].quantity--;
                setChoice([...boxCopy]);
                const costCopy = cost;
                setCost(costCopy - array.cost);
                return ;
            }
        }
    };

    const updateData = async (time: number) => {
        try {
          const docId = "c5EkUB47lyWaKnU36b5c";
          const docRef = doc(dbService, 'kiosk-record', docId); 
      
          const docSnap = await getDoc(docRef);
          const data = docSnap.data();
          console.log(data);
  
          await updateDoc(docRef, {
            "data.cafe.time": arrayUnion(parseInt(((time) / 1000).toFixed(0)))
          });
          console.log('문서 업데이트 완료');
        } catch (error) {
          console.error('문서 업데이트 중 오류 발생:', error);
        }
      };

    const onPayClicked2 = (obj: Ikiosk[]) => {
        const endTime = Date.now();
            if(modeRecoil.cafe){
                let arr:IAtomCafe[] = [];
            for(let i = 0; i < obj.length ; i++){
                arr.push({index: i, name:obj[i].name, quantity: obj[i].quantity});
            }
            SetMenuRecoil(arr);
            setTimeTaken(((endTime - timer)) / 1000);
            updateData(endTime - timer);
            navigate("/kiosk/cafe/result");
        }
        else{
            setTimeTaken(((endTime - timer)) / 1000);
            setResultPrint((prev: boolean) => !prev);
        }
        
    };

    const XClicked = (num: number) => {
        setChoice([...choice.slice(0,num),...choice.slice(num+1)]);  
        setCost((prev) => prev - choice[num].cost * choice[num].quantity);
      
    };

    useEffect(()=> {
        for(let i = 0; i < cafeItem.length; i++){
            cafeItem[i].quantity = 1;
        }
        for(let i = 0; i < cafeItem2.length; i++){
            cafeItem2[i].quantity = 1;
        }
        for(let i = 0; i < cafeItem3.length; i++){
            cafeItem3[i].quantity = 1;
        }
    },[]);
     
    return (
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}> 
        <div style={{display:"flex", flexDirection:"column",alignItems:"center",backgroundColor:"black"}}>
            <CafeContainer
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{
                duration: 0.5,
                delay: 0.2,
            }}}
                exit={{opacity: 0}}>
                <Head>
                    <div style={{color:"white", display: "flex",justifyContent:"space-between",alignItems:"center",padding:"0 3rem"}}>
                        <CafeHomeButton onClick={onBackClick}>Home</CafeHomeButton>
                        <div style={{color:"white", fontSize:"3rem"}}>KT CAFE</div>
                        <div style={{color: "white", fontSize:"1.0rem"}}>KT광운대점</div>
                    </div>
                    <div>
                    <Ul>
                        <Li onClick={() => onListClicked(1)}>
                         COFFEE   
                        </Li>
                        <Li onClick={() => onListClicked(2)}>
                         DESSERT
                        </Li>
                        <Li onClick={() => onListClicked(4)}>
                            ADE/TEA
                        </Li>
                        <Li onClick={() => onListClicked(4)}>
                            OTHER
                        </Li>
                    </Ul>
                    </div>
                </Head>
            <Row>
                {menu.map((obj,index) => 
                <MenuContainer>
                <Box 
                bgphoto={obj.img} 
                key={obj.id}
                variants={boxVariant} initial whileHover="hover" 
                transition={{type:"tween"}}
                onClick={() => onBoxClicked(obj.id, obj)}
                index={index}
                mode={modeRecoil.cafe}>
                </Box>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{fontSize:"23px", fontWeight:"bold"}}>{obj.name}</div>
                    <span>{obj.cost}원</span>
                </div>
                </MenuContainer>
                )}
            </Row>
            {/* <Modal/> */}
            {condiment?.in[0].name}
            <div style={{display:"flex", backgroundColor:"#d3d7d6",height:"11.5vh"}}>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <Button onClick={() => increaseIndex(choice)}>{'<'}</Button>
                            <OrderSlider
                            variants={rowVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{type: "tween", duration: 1}}
                            key="row"
                            >
                                <Order key="order" layoutId="row">
                                    {choice.slice(offset * index, offset * index + offset).map((cho,index) => 
                                    <MenuContainer
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1, transition:{
                                        duration: 0.5,
                                        delay: 0.2,
                                    }}}
                                    exit={{opacity: 0}}>
                                    <SmallBox
                                    bgphoto={cho.img}
                                    key={cho.id}
                                    variants={smboxVariant} initial animate="exit"
                                    transition={{type:"tween"}}
                                >
                                    <XButton onClick={() => XClicked(index)}>X</XButton>          
                                    </SmallBox>
                                    <div style={{display:"flex", alignItems:"center"}}>
                                    <QuantityButton onClick={() => onMinusClicked(cho.id,cho)}>-</QuantityButton>
                                    <div style={{margin: "0 auto", fontSize: "25px", fontWeight:"bold"}}>{cho.quantity}</div>
                                    <QuantityButton onClick={() => onPlusClicked(cho.id,cho)}>+</QuantityButton>
                                    </div>
                                    </MenuContainer>)}
                                </Order>
                            </OrderSlider>
                        <Button onClick={() => increaseIndex(choice)}>{'>'}</Button>
                        
                        {modeRecoil.cafe && modalMatch ? 
                        <>
                        <Overlay/>
                        <MovieExplain>
                            <ModalNavBar>
                            키오스크 지도
                            </ModalNavBar>
                            <AnimatedText text="라 떼는 우유를 탄 에스프레소 커피에요! 고구마라떼를 선택해주세요!"/>
                            <ModalCompleteButton onClick={() => setModalMatch(false)}>확인하기</ModalCompleteButton>
                        </MovieExplain>
                        </>
                        :
                        null
                        }

                    {resultPrint ? 
                    <>
                    <Overlay/>
                    <MovieExplain>
                        <ModalNavBar>
                        키오스크 지도
                        </ModalNavBar>
                        <TimeTakenDiv>
                        주문까지 {timeTaken.toFixed(0)}초 걸렸어요!
                        </TimeTakenDiv>
                        <ModalCompleteButton onClick={() => navigate("/")}>홈으로 가기</ModalCompleteButton>
                    </MovieExplain>
                    </>
                    :
                    null
                    }

                        </div>
            <div style={{display:"flex", fontSize:"20px", alignItems:"center"}}>
            <CafeCostDiv style={{}}><h4>{cost}원</h4></CafeCostDiv>
            
            <CafePayDiv onClick={() => {onPayClicked2(choice)}} style={{height:"100%",backgroundColor:"#212020",color:"white", alignItems:"center", width: "6vw", border: "1px solid white", cursor:"pointer"}}>
                카드결제
            </CafePayDiv>
            <CafePayDiv onClick={() => navigate("/Menu/home/hard/cafe/payment")} style={{height:"100%",backgroundColor:"#212020",color:"white", alignItems:"center", width: "6.5vw", border: "1px solid white", cursor:"pointer"}}>
                현금결제
            </CafePayDiv>
            </div>
            </div>
            </CafeContainer>
            </div>
        </AnimatePresence>
    );
}

export default Cafe_index;