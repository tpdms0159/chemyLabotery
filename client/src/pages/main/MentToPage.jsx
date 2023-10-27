import axios from 'axios';
import React,{useState} from 'react'
import { Link } from "react-router-dom";
import PageMoveButton from '../../components/Button/PageMoveButton';

export default function MentToPage() {
  const [text, setText] = useState("");
  const token = localStorage.getItem("accessToken");

  function generateRandomNumber() {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    return randomNumber.toString();
  }
  

  const coMent = () => {
    console.log('length:', text.length == 14);
    if (text.length > 15) {
      alert("15자 이하로 입력해주세요");
      navigator("/ment");
    }
    else {
    const randomNum = generateRandomNumber();
    axios.post("https://chemylab.shop/ment", {text : text, randomNum:randomNum}, {
      headers: {
          'Authorization': `Bearer ${token}`  // Include the token here
      }
  })
  .then(
    response => {
    console.log(response.data);

  })
  .catch(error => {
    console.error(error);

  });
  }
}


  return (
    <div className='mainview'>
      {/* <img alt="border" src="icons/backgroundBorder.png"  style={{position: 'fixed', top: 0, width: '100%', height:'100vh'}}/> */}
      <img alt="상대물약4" src="/icons/finishMy.png" />
        <p className='greyFont' style={{marginBottom: 0}}>거의 제조가 끝나가요!</p>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <p>상대에게 전할 한마디</p>
        <p className='greyFont'>를 적어주세요</p>
      </div>

      <input type="text" placeholder='마지막 한마디 적기' onChange={(e)=>setText(e.target.value)} />
      {text.length != 0 ? <Link to={text.length > 15  ? '' : '/ment/loading'} onClick={coMent}><img alt='blueArrow' src='/icons/blueArrow.png' className='blueArrow'/></Link>
        : <div style={{height: '165px'}} />}
      


    </div>
  )
}

