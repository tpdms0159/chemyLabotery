import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function PersonPage() {
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const [selectedIds, setSelectedIds] = useState([]); // 선택된 항목의 ID를 저장할 상태
  const token = localStorage.getItem("accessToken");

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
    axios.post("http://localhost:8000/person", 
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
      <h1>내가 그 사람을 떠올리면...</h1>
      <img alt='person' src='/icons/person.png' />
      <div>
        {data.map((item) => {
          const isSelected = selectedIds.includes(item.id);
          return (
            <div
            className='personpage'
              key={item.id}
              style={{ background: isSelected ? 'black' : 'gray', color: isSelected ? 'white' : 'black' }} // 선택된 항목을 빨간색으로 표시 (선택에 따라 스타일을 변경할 수 있습니다)
              onClick={() => handleClick(item.id)}
            >
              {item.word}
            </div>
          );
        })}
      </div>
      {selectedIds.length === 3 && (
        <Link className='personnext' to="/ment" onClick={submitValues}>이동</Link>
      )}
    </div>
  );
}
