import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

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
    <div className='mainview'>
      {/* <img alt="border" src="icons/backgroundBorder.png"  style={{position: 'fixed', top: 0, width: '100%', height:'100vh'}}/> */}

      <p className="midtitle cntText" >{selectedIds.length} / 3</p>
        <div className="titleBox" >
          <h2 className='subtitle midtitle' style={{width: '250px'}}>내가 그 사람을 떠올리면...</h2>
          <p className='subtitle' style={{width: '280px'}}>상대방을 설명하는 키워드를 골라보세요!</p>
          <img alt='friend' src="/icons/person.png" className='img3'/>
      </div>


      <div style={{marginTop: '30px'}}>
        {data.map((data, index) => {
          
          words = [...words, data];
          return(
            <div key={index}>
            { parseInt(index % 2) === 1 ? 
            
            <div className="showBtn"> 
              {words.map((words) => {   
                const isSelected = selectedIds.includes(words.id);
                return(
                  <button key={words.id} className="valueBtn personBtn" onClick={() => handleClick(words.id)}
                  style={{ background: isSelected ? '#3688FF' : '#FF6CD9', color: 'white' }} >  
                  {words.word}
                    </button>
                )
              })}
              {words = []}
              </div> 
            : null}
            </div>
          );
        }
        )
      }
      </div>

      {selectedIds.length === 3 ?  (
        <Link to="/ment" onClick={submitValues}>
          <img alt='blueArrow' src='/icons/blueArrow.png' className='blueArrow'/>
          </Link>
      ) : <div style={{height: '165px'}} />}
    </div>
  );
}
