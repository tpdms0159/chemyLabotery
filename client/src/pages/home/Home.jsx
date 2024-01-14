import React, { useState } from 'react'
import { Link } from "react-router-dom";
import PageMoveButton from '../../components/Button/PageMoveButton';
import styled from 'styled-components';
import Mainview, { Bigl, Biglogo } from '../../components/StyledTag';



function Home() {
  return (
    <Mainview>
      <Biglogo alt='logo' src='../icons/logo.png' />
      <PageMoveButton path="/login" text="회원가입 및 로그인하기" />
    </Mainview>
  )
}

export default Home;
