import React, { useContext } from 'react'
import PageMoveButton from '../../../components/Button/PageMoveButton'
import MainPage from '../Mainpage/MainPage'
import Mainview, { Bigicons, Biglogo, Linebox, Middlelog, Subtext } from '../../../components/StyledTag'

export default function StartPage() {


  return (
    <Mainview>
   
    <Bigicons alt='startMedicine' src='../icons/startIcon.png' />


    <Subtext>
      <Linebox>
        <p>나의 물약을 제조</p>
        <p className='greyFont'>한 후</p>
      </Linebox>

      <p className='greyFont' style={{margin: '8px'}}>상대와 섞어</p>

      <Linebox>
        <p >케미</p>
        <p className='greyFont'>를 확인해보세요!</p>
      </Linebox>
    </Subtext>

  <PageMoveButton path="/start/loading" text="나의 물약 제조하기" />
  </Mainview>
  )
}
