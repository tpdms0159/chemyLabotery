import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const FinalResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const friendnum = queryParams.get('friendnum');
  const [temp, setTemp] = useState(0);
  const [my, setMy] = useState([]);
  const [friend, setFriend] = useState([]);

  let cnt = 0;


  useEffect(() => {
    // setCnt( cnt + 1);
    const token = localStorage.getItem("accessToken");
    axios.get('http://localhost:8000/final/my', {
        headers: {
            'Authorization': `Bearer ${token}`,
            // 'codenum': `${friendnum}`
        },
           
    })
    .then(res  => {
      console.log(res.data);
      setMy(res.data.myChoice);
      
    })
    .catch(error => {
        return console.error(error);
    });
}, []);

useEffect(() => {
  
  const token = localStorage.getItem("accessToken");
  axios.get('http://localhost:8000/final/friend', {
      headers: {
          'Authorization': `Bearer ${token}`,
          'codenum': `${friendnum}`
      },
         
  })
  .then(res  => {
    console.log(res.data);
    setFriend(res.data.friendChoice);
    
  })
  .catch(error => {
      return console.error(error);
  });  

}, []);



// 0: 밸런스게임
// 1: 가치관
// 2: 상대 성격
// 3: 멘트


const showPerson = [];
const showMy = [];
const showFriend =[];
const showOver = [];

function update ()  {

  if (my.length > 3){
  for (let i = 0; i < 10; i++) {
    if (my[0][i].balacedata == friend[0][i].balacedata) {
      console.log('match');
      cnt = cnt + 1;
    }
  };


  for (let i = 0; i < 5; i++) {
    if (my[1][i].value == friend[1][i].value) {
      showOver.push(my[1][i].value);
    }

    else {
      showMy.push(my[1][i].value);
      showFriend.push(friend[1][i].value);
    }
  }


  for (let i = 0; i < 3; i++) {
    showPerson.push(friend[2][i].value);
  }

  console.log(friend[3][0].mentdata);


}
};

update();
console.log(cnt);

// 상대가 선택한 성격 가져오기

  
  return (
    <div className='mainview'>
      
        <div>
        <p>물약 분석 결과...</p>
        <h1>우리의 케미는?</h1>
        </div>

      <h4>우리의 취향 온도</h4>
      <h1> { cnt * 10 }</h1>

      <diV>
        <h2>우리 둘의 가치관은...</h2>
        <div>
          {showMy.map((data) => {
            <>
              {data}
            </>
          })}
        </div>

        <div>
          {showOver.map((data) => {
            <>
              {data}
            </>
          })}
        </div>

        <div>
          {showFriend.map((data) => {
            <>
              {data}
            </>
          })}
        </div>
      </diV>
      
      <div>
        <h3>상대가 보는 나는...</h3>
        {showPerson.map((data) => {
          return (
            <>
              {data}
            
            </>
          )
        })}
      
      
      </div>
      <h1>{friend.length > 3 ? friend[3][0].mentdata : ""}</h1>

    </div>
  );
}

export default FinalResult;
