import React from 'react'
import PageMoveButton from '../../components/Button/PageMoveButton'

export default function StartPage() {
  return (
    <div className='mainview'>
    <img alt='startMedicine' src='../icons/startMedicine.png' />
    <div className='textBox'>

      <span style={{display: 'flex', flexDirection: 'row'}}><p className='blackFont'>나의 물약을 제조</p>
      <p>한 후</p>
      </span>
      <span>상대와 섞어</span>
      <span style={{display: 'flex', flexDirection: 'row'}}><p className='blackFont'>케미</p>
      <p>를 확인해보세요!</p>
      </span>
    </div>
    <PageMoveButton path="/start/loading" text="나의 물약 제조하기" />
    </div>
  )
}
