import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { CafeAnswer, IAtomCafe, ICafe, cafeObj } from "../../Atom/atom";
import { Box, Button, CafeContainer, CafeCostDiv, CafeHomeButton, CafePayDiv, Head, IItem, IPay, Ikiosk, Li, MenuContainer, Order, OrderSlider, QuantityButton, Row, SmallBox, StyledLink, Ul, XButton, boxVariant, rowVariants, smboxVariant } from "../../component/kiosk-component/styled_cafe";
import { useEffect, useState } from "react";
import { cafeItem, cafeItem2, cafeItem3 } from "./data";
import { AnimatePresence } from "framer-motion";
import GameNav from "../Navbar/GameNav";

const offset = 4;

function Cafe_index () {
    const navigate = useNavigate();
    const [menuRecoil,SetMenuRecoil] = useRecoilState<IAtomCafe[]>(cafeObj);
    const [menu, setKiosk] = useState<Ikiosk[]>(cafeItem);
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [cost, setCost] = useState(0);
    const [choice, setChoice] = useState<Ikiosk[]>([]);
    const [focus,setFocus] = useState(0);
    const [send, setSend] = useState<IPay>();
    const [condiment,setCondiment] = useState<IItem>();
    const answer = useRecoilValue<ICafe[]>(CafeAnswer);
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
    
    
    const onPayClicked = (obj: Ikiosk[]) => {
        let item2 = [];
        for(let i = 0; i < obj.length; i++){
            const item = {
                name: obj[i].name,
                quantity: obj[i].quantity,
            };
            item2.push(item);
        }
    setSend({
        store: "cafe",
        level: "middle",
        basket:[
            ...item2
        ]
    });
    
    fetch("http://minho2618.dothome.co.kr/test1/api/kiosk_answer.php",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(
          send  
        ),
    }).then((response) => response.json()).then((result) => setCondiment(result));
    
    };

    const onPayClicked2 = (obj: Ikiosk[]) => {
        let arr:IAtomCafe[] = [];
        for(let i = 0; i < obj.length ; i++){
            arr.push({name:obj[i].name, quantity: obj[i].quantity});
        }
        SetMenuRecoil(arr);
        navigate("/Menu/home/hard/cafe/payment");
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
                {menu.map((obj) => 
                <MenuContainer>
                <Box 
                bgphoto={obj.img} 
                key={obj.id}
                variants={boxVariant} initial whileHover="hover" 
                transition={{type:"tween"}}
                onClick={() => onBoxClicked(obj.id, obj)}>
                </Box>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{fontSize:"23px", fontWeight:"bold"}}>{obj.name}</div>
                    <span>{obj.cost}원</span>
                </div>
                </MenuContainer>
                )}
            </Row>
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