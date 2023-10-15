import React from 'react'
import PageMoveButton from '../../components/Button/PageMoveButton'

export default function StartPage() {
  return (
    <div className='startPage'>
    <img alt='startMedicine' src='../icons/startMedicine.png' />
    <div className='startText'>
      <span>나의 물약을 제조한 후</span>
      <span>상대와 섞어</span>
      <span>케미를 확인해보세요!</span>
    </div>
    <PageMoveButton path="/balance/1" text="나의 물약 제조하기" />
    </div>
  )
}
