import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Mainview, { Rowbtnbox, Keywordbtn, Middletitle, Minititle, Titlebox, Btnbox, Minilogo, Middlelog } from "../../../components/StyledTag";

export default function ValuePage() {
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const token = localStorage.getItem("accessToken");

  let words = [];

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(res => {
        setData(res.value); 
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleClick = id => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else if (selectedIds.length < 5) {
      setSelectedIds(prev => [...prev, id]);
    }
  };

  const submitValues = () => {
    axios.post("https://chemylab.shop/values", 
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
      
        <p className="midtitle cntText" >{selectedIds.length} / 5</p>

        <Titlebox style={{marginTop: '10vh'}}>
          <Middletitle>나의 인생에서는...</Middletitle>
          <Minititle> 
            내 인생에서 중요하게 여기는
              <br/>
              <br/>
            가치들을 골라보세요!
          </Minititle>
        </Titlebox>

      <Btnbox>
        {data.map((data, index) => {          
          words = [...words, data];
          return(
            <>
            { parseInt(index % 3) === 2 ? 
            
            <Rowbtnbox> 
              {words.map((words) => {
                const isSelected = selectedIds.includes(words.id);
                return(
                  <Keywordbtn key={words.id} onClick={() => handleClick(words.id)}
                  style={{ background: isSelected ? '#3688FF' : '#FF6CD9', color: 'white' }} >  
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

      {selectedIds.length === 5 ? (
        <Link to='/value/finish' onClick={submitValues}>
          <img alt="blueArrow" src="/icons/blueArrow.png" className="blueArrow"/>
        </Link>
      ): <div style={{height: '165px'}} />}
    </Mainview>

  );
}
