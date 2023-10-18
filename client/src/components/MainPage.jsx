import React from 'react'
import PageMoveButton from './Button/PageMoveButton'

function MainPage() {
  return (
    <div className='mainview'>
      <img alt='logo' src='../icons/logo.png' style={{
        width: '50vw',
        height: 'auto',
        marginTop: '20vh'
      }}/>

      <div className='homeBtn'>
      <PageMoveButton path="/start" text="처음부터 실험하기" />
      <PageMoveButton path="/value/finish" text="상대 물약만 다시 제조하기" />
      <PageMoveButton path="/result" text="물약 코드로 케미 확인하기" />
      </div>
    </div>
  )
}

export default MainPage
