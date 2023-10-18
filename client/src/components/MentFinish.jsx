import React from 'react'
import { Link } from 'react-router-dom'

function MentFinish() {
  return (
    <div className='mainview'>
      <Link to="/result"><img alt='finish' src='/icons/logo.png'/></Link>
      <p>물약 제조 중...</p>
    </div>
  )
}

export default MentFinish
