import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function ValuePage() {
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const token = localStorage.getItem("accessToken");

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
    axios.post("http://localhost:8000/values", 
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
    <div className="mainview">
      <h1>내 인생에서 중요하게 여기는</h1>
      <h1>가치들을 골라주세요</h1>
      <div>
        {data.map((dataItem) => { 
          const isSelected = selectedIds.includes(dataItem.id);
          return (
            <div
            className="valuepage"
              key={dataItem.id}
              style={{ background: isSelected ? 'black' : 'gray', color: isSelected ? 'white' : 'black' }}
              onClick={() => handleClick(dataItem.id)}
            >
              {dataItem.word}
            </div>
          );
        })}
      </div>
      {selectedIds.length === 5 && (
        <Link to='/person' className="valuenext" onClick={submitValues}>이동</Link>
      )}
    </div>
  );
}
