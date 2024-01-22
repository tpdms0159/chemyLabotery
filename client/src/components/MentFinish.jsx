import React from 'react'
import { Link } from 'react-router-dom'
import Mainview, { Biglogo } from './StyledTag';

function MentFinish() {
  setTimeout(() => {
    window.location.href = "/result"
  },1000);
  return (
    <Mainview>

      <Biglogo alt='finish' src='/icons/finishMent.png' className='blueArrow'/>
      <p>물약 제조 중...</p>
    </Mainview>
  )
}

export default MentFinish;
