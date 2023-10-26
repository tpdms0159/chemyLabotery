import React, { useState } from 'react'
import { Link } from "react-router-dom";
import PageMoveButton from '../../components/Button/PageMoveButton';
import BorderImg from '../../components/BorderImg';

const HomePage = () => {
  return (
 <>
    <div className='mainview'>
    
       <img alt='logo' src='../icons/logo.png' />
       <PageMoveButton path="/login" text="회원가입 및 로그인하기" />
    </div>
  
    </>
  )
}

export default HomePage
