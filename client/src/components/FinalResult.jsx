import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageMoveButton from "./Button/PageMoveButton";
import jwt_decode from "jwt-decode";
import { isObject } from "util";


const FinalResult = () => {
  const location = useLocation();
  const url = 'https://chemylaboratory.swygbro.com/';
  const queryParams = new URLSearchParams(location.search);
  const friendnum = queryParams.get("friendnum");
  const token = localStorage.getItem("accessToken");
  // const [temp, setTemp] = useState(0);
  const [my, setMy] = useState([]);
  const [friend, setFriend] = useState([]);
  let tempMent1 = '';
  let tempMent2 = '';

    //jwt decode
    const jwtencode = localStorage.getItem("accessToken");
    const tokenDecode = jwtencode;
    const decoded = jwt_decode(tokenDecode);
    const usernameDecode = decoded.username; 

  const [data, setData] = useState([]);

  let temp = 0;

  // 0: 밸런스게임
  // 1: 가치관
  // 2: 상대 성격
  // 3: 멘트
  let username = '';
  const showPerson = [];
  const showMy = [];
  const showFriend = [];
  const showOver = [];
  // let cnt = 0;



  useEffect(() => {
    // data.json 가져오기
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.error("Error:", error));

    // 본인 정보 가져오기
    axios
      .get("https://chemylab.shop/final/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {

        setMy(res.data.myChoice);
      })
      .catch((error) => {
        return console.error(error);
      });

    // 친구 정보 가져오기
    axios
      .get("https://chemylab.shop/final/friend", {
        headers: {
          Authorization: `Bearer ${token}`,
          codenum: `${friendnum}`,
        },
      })
      .then((res) => {
        setFriend(res.data.friendChoice);
      })
      .catch((error) => {
        return console.error(error);
      });
  }, [tempMent1]);

  function update()  {
    
    if (friend && friend.length === 4 && my && my.length === 3) {
      // 밸런스 값 비교하기
      for (let i = 0; i < 10; i++) {
        if (my[1][i].balacedata == friend[0][i].balacedata) {
            temp = temp+1
        }
      }

      // 일치하는 가치관 찾기
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (my[2][i].value === friend[1][j].value) {
            showOver.push(friend[1][j].value);
          }
        }
        showMy.push(my[2][i].value)
        showFriend.push(friend[1][i].value);
      }

      // 겹치는 가치관 제거
      for (let i = 0; i < showOver.length; i++) {
        for (let j = 0; j < 5; j++) {
          
          if (showOver[i] === showMy[j]) {
            
            showMy.splice(j,1);
          }
          if (showOver[i] === showFriend[j]) {
            showFriend.splice(j,1);
          }
        }
      }

      // 상대의 성격 보여주기
      for (let i = 0; i < 3; i++) {
        showPerson.push(friend[2][i].value);
      }

      // 온도에 따른 멘트보여주기
      if (data.resultMent.length === 7) {
        const resultMent = data.resultMent;
        username = my[0];
        if (temp === 0){
          tempMent1 = resultMent[0].ment1;
          tempMent2 = resultMent[0].ment2;
        }
        else if (temp <= 5) {
          const ind = parseInt((temp+1) / 2);
          tempMent1 = resultMent[ind].ment1;
          tempMent2 = resultMent[ind].ment2;
        }
        else {
          const ind = parseInt(temp / 2) + 1;
          tempMent1 = resultMent[ind].ment1;
          tempMent2 = resultMent[ind].ment2;
        }
    }
    
  };
}

  update();

  const handleCopyClipBoard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div className="mainview" style={{padding: '100px 0'}}>

      <div className="title">
        <p className="greyFont" style={{
          height: '10px',
          margin: 0,
          marginTop: '-30px'
        }}>물약 분석 결과</p>
        <p>우리의 케미는?</p>
      </div>
      
      <img alt="ondo" src={`/icons/ondo${temp}.png`} className="img3" style={{width: '250px', height: '210px', margin: '30px'}} />

      <div className="midtitle" style={{ padding: '20px', width: '180px', height: '100px', margin: '30px'}}>
        <p className="greyFont" style={{fontSize: '20px'}}>우리의 취향 온도</p>
        <p style={{fontSize: '30px', marginTop: '-10px'}}>{temp * 10} °C</p>
      </div>

      { tempMent1 == undefined ?  null : 
        <div className="subtitle" style={{fontSize: '18px', color: 'black', height: '40px', lineHeight: '20px'}}>
        {tempMent1}
        <br/>
        {tempMent2}
        </div>
      }
      

      <div>
        <h2 style={{marginTop: '100px'}}>우리 둘의 가치관은...</h2>
        <img alt="youAndI" src="/icons/youandme.png" style={{width: '400px', height: '200px'}} />
      </div>


      <div className="linebox">
        <div className="keyword" style={{color: 'rgba(234, 142, 220, 1)'}}>
        {showMy.length > 0 && showMy.map((personIndex, index) => {
            const my = data.value[personIndex - 1];
            return <div key={index}>{my && my.word}</div>;
          })}
        </div>

        <br/>

      <div className="keyword" style={{color: 'rgba(152, 96, 205, 1)'}}>
      {showOver.length > 0 &&
        showOver.map((personIndex, index) => {
          const showover = data.value[personIndex - 1];
          return <div key={index}>{showover && showover.word}</div>;
        })}
      </div>
        <br></br>

          <div className="keyword" style={{color: 'rgba(105, 172, 248, 1)'}}>
          {showFriend.length > 0 &&
            showFriend.map((personIndex, index) => {
              const friend = data.value[personIndex - 1];
              return <div key={index}>{friend && friend.word}</div>;
            })}
          </div>
        
      </div>

      <div >
        <h2 style={{marginTop: '100px'}}>상대가 보는 나는...</h2>
        <div className="linebox" style={{height: '50px', margin: 0, marginBottom: '80px'}}>
        {showPerson.length > 0 &&
          showPerson.map((personIndex, index) => {
            const person = data.person[personIndex - 1];
            return <div key={index} className="showpersontext">
              {person && person.word}{index+1 === showPerson.length ? '' : ','}&nbsp;</div>;
          })}
          <p> </p>
          <p className="greyFont" style={{fontSize: '16px'}}>&nbsp;사람 </p>
          </div>
      </div>
        
      <div className="friendsay">
        <img alt='friend' src="/icons/friendIcon.png" className="img4" style={{margin: '-10px'}} />

        <div >
          <p className="greyFont" style={{fontSize: '16px', textAlign: 'left', margin: 0, marginLeft: '20px'} }>상대가 보낸 마음의 편지</p>
          <div style={{position: 'relative', }}>
          <img alt="sayment" src="/icons/sayMent.png" className="img4" style={{
            height: '70px',
            width: '260px',
            // marginLeft: '-15px',
            // marginTop: '-10px'
          }}/>
           
          <h3 style={{
            position: 'absolute',
            textAlign: 'center', 
            top: '15%', 
            left: "15%", 
            color: "white", 
            fontSize: '15px',
            width: '210px', 
            height: '60px'}}>{friend.length > 3 ? friend[3][0].mentdata : ""}</h3>
          </div>
        </div>
      </div>

      <div className="titleBox">
      <button className='moveButton fontStyle' onClick={() => handleCopyClipBoard(url)}>테스트 공유하기</button> 
      <PageMoveButton path={`/main/${usernameDecode}`} text="메인 화면으로 돌아가기" />
      </div>
    </div>
 

    
  );
};



export default FinalResult;
