import React from 'react'
import PageMoveButton from '../../components/Button/PageMoveButton'

function FinishMy() {
  
  return (
    <div className='mainview'>
      {/* <img alt="border" src="icons/backgroundBorder.png"  style={{position: 'fixed', top: 0, width: '100%', height:'100vh'}}/> */}
        <h1 className='title' style={{
          fontSize: '28px',
          width: '300px',
          height: '20px',
          lineHeight: '25px'}}>나의 물약 제조 완료!</h1>
        <img alt='finishmy'src='/icons/finishMy.png' className='img3' />

        <div style={{display: 'flex', flexDirection: 'row'}}>
        <p className='greyFont'>이제  </p>
        <p>&nbsp;상대의 물약</p>
        <p className='greyFont'>을 제조할 차례예요.</p>
        </div>

        <PageMoveButton path='/value/loading' text="상대 물약 제조하기" />
      
    </div>
  )
}

export default FinishMy
