import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Mainview, { Bigicons, Btnbox, Keywordbtn, Middleicons, Middletitle, Minititle, Rowbtnbox, Titlebox } from '../../../components/StyledTag';

export default function PersonPage() {
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const [selectedIds, setSelectedIds] = useState([]); // 선택된 항목의 ID를 저장할 상태
  const token = localStorage.getItem("accessToken");
  let words = [];

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(res => {
        setData(res.person); 
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleClick = id => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else if (selectedIds.length < 3) {
      setSelectedIds(prev => [...prev, id]);
    }
  };

  const submitValues = () => {
    axios.post("https://chemylab.shop/person", 
                { values: selectedIds }, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`  // Include the token here
                    }
                })
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
  };
  


  return (
    <Mainview>
      
      <p className="midtitle cntText" >{selectedIds.length} / 3</p>

      <Titlebox style={{marginTop: '100px'}}>
        <Middletitle>내가 그 사람을 떠올리면...</Middletitle>
        <Minititle>상대방을 설명하는 키워드를 골라보세요!</Minititle>
        <Bigicons alt='friend' src="/icons/person.png" />
      </Titlebox>


      <Btnbox>
        {data.map((data, index) => {
          
          words = [...words, data];
          return(
            <>
            { parseInt(index % 2) === 1 ? 
            
            <Rowbtnbox> 
              {words.map((words) => {   
                const isSelected = selectedIds.includes(words.id);
                return(
                  <Keywordbtn key={words.id} onClick={() => handleClick(words.id)}
                  style={{ 
                    background: isSelected ? '#3688FF' : '#FF6CD9', color: 'white', 
                    maxWidth: '170px'}} >  
                  {words.word}
                    </Keywordbtn>
                )
              })}
              {words = []}
              </Rowbtnbox> 
            : null}
            </>
          );
        }
        )
      }
      </Btnbox>

      {selectedIds.length === 3 ?  (
        <Link to="/ment" onClick={submitValues}>
          <img alt='blueArrow' src='/icons/blueArrow.png' className='blueArrow'/>
          </Link>
      ) : <div style={{height: '165px'}} />}
    </Mainview>
  );
}
