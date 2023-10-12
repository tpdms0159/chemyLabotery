import React from 'react'
import { Link } from "react-router-dom";
import PageMoveButton from '../../components/Button/PageMoveButton';

const HomePage = () => {
  return (
    <div className='mainview'>
       <img alt='logo' src='../icons/logo.png' />
       <div className="homebtn">
       <PageMoveButton path="/login" text="간편 로그인하기"/>
       </div>
    </div>
  )
}

export default HomePage
