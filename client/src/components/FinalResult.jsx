import React from 'react';
import { useLocation } from 'react-router-dom';

const FinalResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const friendnum = queryParams.get('friendnum');
  
  return (
    <div className='mainview'>
      <p>친구의 물약 코드: {friendnum}</p>
    </div>
  );
}

export default FinalResult;
