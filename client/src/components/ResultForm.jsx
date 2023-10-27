import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import FriendResult from './FinalResult';
import PageMoveButton from './Button/PageMoveButton';
import { ThemeContext } from './MainPage';
import jwt_decode from "jwt-decode";

const ResultForm = () => {
    const [numdate, setNumdate] = useState("");
    const [friendnum, setFriendnum] = useState("");
    const url = 'https://chemylaboratory.swygbro.com';
    const navigate = useNavigate();


    // console.log(url);
    //jwt decode
    const jwtencode = localStorage.getItem("accessToken");
    const tokenDecode = jwtencode;
    const decoded = jwt_decode(tokenDecode);
    const usernameDecode = decoded.username; 


    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        axios.get('https://chemylab.shop/result', {
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'codenum': {friendnum}
            }   
        })
        .then(res  => {
           setNumdate(res.data.numdata);
        })
        .catch(error => {
            return console.error(error);
        });

    }, []);

    const handleCopyClipBoard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log(url);
            alert("클립보드에 링크가 복사되었어요.");
        } catch (err) {
            console.log(err);
        }
    };

    const findNumdata = () => {
        const token = localStorage.getItem("accessToken");

        axios
        .get("https://chemylab.shop/final/friend", {
          headers: {
            Authorization: `Bearer ${token}`,
            codenum: `${friendnum}`,
          },
        })
        .then((res) => {
            navigate(`/final?friendnum=${friendnum}`);
        })
        .catch((error) => {
          alert('존재하지 않는 코드입니다.')
        });
    }
    

const location = useLocation();

    return (
        <div className='mainview'>
            {/* <img alt="border" src="icons/backgroundBorder.png"  style={{position: 'fixed', top: 0, width: '100%', height:'100vh'}}/> */}
            <h4 className='title'>물약 제조 완료</h4>
            <img alt='최종 물약 아이콘' src='/icons/finishIcon.png' style={{marginBottom: '50px'}} />
            <h2 className='greyFont'>나의 물약 코드</h2> 
            <p style={{fontSize: '24px' , marginTop: 0}}>{numdate}</p>
            
            <input type="text" placeholder="상대 물약 코드 입력 후 결과 확인하기"onChange={e => setFriendnum(e.target.value)} style={{marginBottom: '30px'}}/>
            {
                friendnum.length == 6 ? 
                <img alt='blueArrow' src='/icons/blueArrow.png' className='arrow' onClick={findNumdata}/>
                : ""
            }
            

            <button className='moveButton fontStyle' onClick={() => handleCopyClipBoard(url)}>테스트 공유하기</button> 
            <PageMoveButton path={`/main/${usernameDecode}`} text="메인 화면으로 돌아가기" />
            <p className='greyFont' style={{marginBottom: '100px'}}>메인화면으로 돌아가도 코드는 저장됩니다.</p>

            
        </div>
    );
}

export default ResultForm;
