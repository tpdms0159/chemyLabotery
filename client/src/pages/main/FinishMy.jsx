import React from 'react'
import PageMoveButton from '../../components/Button/PageMoveButton'
import Mainview, { Bigicons, Linebox, Middleicons, Subtext, Title } from '../../components/StyledTag'

function FinishMy() {
  
  return (
    <Mainview>
      
        <Title style={{fontSize: '33px'}}>나의 물약 제조 완료!</Title>
        <Bigicons alt='finishmy'src='/icons/finishMy.png'  />

        <Subtext>
          <Linebox>
            
            <p className='greyFont'>이제</p>
            <p>&nbsp;상대의 물약</p>
            <p className='greyFont'>을 제조할 차례예요</p>
          </Linebox>

        </Subtext>

        <PageMoveButton path='/value/loading' text="상대 물약 제조하기" />
      
    </Mainview>
  )
}

export default FinishMy
