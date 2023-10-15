import axios from 'axios';
import React,{useState} from 'react'
import { Link } from "react-router-dom";

export default function MentToPage() {
  const [text, setText] = useState("");
  const token = localStorage.getItem("accessToken");

  function generateRandomNumber() {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    return randomNumber.toString();
  }
  

  const coMent = () => {
    const randomNum = generateRandomNumber();
    axios.post("http://localhost:8000/ment", {text : text, randomNum:randomNum},                {
      headers: {
          'Authorization': `Bearer ${token}`  // Include the token here
      }
  })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
  }


  return (
    <div className='mentToPage'>
      <h1>거의 실험이 끝나가요!</h1>
      <h1>상대에게 전할</h1>
      <h1>한마디를 적어주세요</h1>

      <img alt='상대의 물약 아이콘' src='/icons/logo.png' />
      <input placeholder='친구에게 한마디' onChange={(e)=>setText(e.target.value)} />
      <Link to='/result' onClick={coMent}>제출</Link>
    </div>
  )
}

