import { useRecoilState, useRecoilValue } from "recoil";
import { Box2, CafeContainer2, CafeRecordBox, CafeRecordButtonDiv, CafeResultBox, CafeResultContainer, CafeResultDiv, Head2 } from "../../component/kiosk-component/styled_cafe";
import { CafeAnswer, IAtomCafe, cafeObj, cafeTime } from "../../Atom/atom";
import { ImageBox } from "../../component/kiosk-component/styled_kiosk";
import Latte from "../../images/Latte.jpg";
import Chocolate from "../../images/Chococake.png";
import Ade from "../../images/grapes.png";
import { ModalCompleteButton } from "../../component/kiosk-component/styled_movie";
import { useNavigate } from "react-router-dom";

function Cafe_result(){
    const navigate = useNavigate();
    const answer = useRecoilValue(CafeAnswer);
    const menuArr = [Latte,Chocolate, Ade];
    const [menuRecoil,SetMenuRecoil] = useRecoilState<IAtomCafe[]>(cafeObj);
    const takenTime = useRecoilValue(cafeTime);


    return (
        <CafeContainer2>
            <Head2>
                결과 확인하기
            </Head2>
            
            <CafeRecordBox>{takenTime.toFixed(0)}초 걸리셨어요!</CafeRecordBox>
            <CafeResultDiv>
                <CafeResultBox>
                    <Box2 bgphoto={menuArr[0]}/>
                { menuRecoil[0] ?
                    answer[0].name === menuRecoil[0].name ?
                    <span style={{fontSize:"2em",fontWeight:"700",color:"#2BB7B3"}}>{menuRecoil[0].name} 선택 성공!</span>:
                     <span style={{fontSize:"2em",fontWeight:"700",color:"#f96363"}}>{menuRecoil[0].name}의 선택이 틀렸습니다.</span>
                :
                <span style={{fontSize:"2em",fontWeight:"700",color:"#f96363"}}>선택을 안하셨군요!</span>
                }
                </CafeResultBox>
                
                <CafeResultBox>
                    <Box2 bgphoto={menuArr[1]}/>
                { menuRecoil[1] ?
                    answer[1].name === menuRecoil[1].name ?
                    <span style={{fontSize:"2em",fontWeight:"700",color:"#2BB7B3"}}>{menuRecoil[1].name} 선택 성공!</span>:
                     <span style={{fontSize:"2em",fontWeight:"700",color:"#f96363"}}>{menuRecoil[1].name}의 선택이 틀렸습니다.</span>
                :
                <span style={{fontSize:"2em",fontWeight:"700",color:"#f96363"}}>선택을 안하셨군요!</span>
                }
                </CafeResultBox>
                
                <CafeResultBox>
                    <Box2 bgphoto={menuArr[2]}/>
                { menuRecoil[2] ?
                    answer[2].name === menuRecoil[2].name ?
                    <span style={{fontSize:"2em",fontWeight:"700",color:"#2BB7B3"}}>{menuRecoil[2].name} 선택 성공!</span>:
                     <span style={{fontSize:"2em",fontWeight:"700",color:"#f96363"}}>{menuRecoil[2].name}의 선택이 틀렸습니다.</span>
                :
                <span style={{fontSize:"2em",fontWeight:"700",color:"#f96363"}}>선택을 안하셨군요!</span>
                }
                </CafeResultBox>
                
                </CafeResultDiv>
                <CafeRecordButtonDiv>
                    <ModalCompleteButton onClick={() => navigate("/")}>홈으로 가기</ModalCompleteButton>
                    <ModalCompleteButton onClick={() => navigate("/login")} style={{backgroundColor:"#f96363"}}>기록 확인하기</ModalCompleteButton>
                </CafeRecordButtonDiv>
        </CafeContainer2>
    )
}

export default Cafe_result;