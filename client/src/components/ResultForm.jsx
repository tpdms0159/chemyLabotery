import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import FriendResult from './FinalResult';

const ResultForm = () => {
    const [numdate, setNumdate] = useState("");
    const [friendnum, setFriendnum] = useState("") 

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        axios.get('http://localhost:8000/result', {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
            
        })
        .then(res  => {
           setNumdate(res.data.numdata);
        })
        .catch(error => {
            return console.error(error);
        });
    }, []);

    return (
        <div className='mentToPage'>
            <h1>물약 제조 완료!</h1>
            <img alt='최종 물약 아이콘' src='/icons/myMedicineresult.png' />
            <h2>{`나의 물약 코드 : ${numdate}`}</h2> 
            <input type="text" onChange={e => setFriendnum(e.target.value)}/>
            <Link to={`/final?friendnum=${friendnum}`}>결과 바로보기</Link>
        </div>
    );
}

export default ResultForm;
