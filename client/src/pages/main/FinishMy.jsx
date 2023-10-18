import React from 'react'
import PageMoveButton from '../../components/Button/PageMoveButton'

function FinishMy() {
  return (
    <div className='mainview'>
        <h1>나의 물약 제조 완료!</h1>
        <img alt='finishmy'src='/icons/logo.png' />
        <p>이제 상대의 물약을 제조할 차례예요.</p>
        <PageMoveButton path='/value/loading' text="상대 물약 제조하기" />
      
    </div>
  )
}

export default FinishMy
