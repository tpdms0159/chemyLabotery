import React, { createContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from '../pages/login';
import SignUpPage from '../pages/signup';
import HomePage from '../pages/home';
import Home from '../pages/main';
import StartPage from '../pages/main/StartPage';
import BalancePage from "../pages/main/BalancePage";
import FinishMy from '../pages/main/FinishMy';
import ValuePage from '../pages/main/ValuePage';
import PersonPage from '../pages/main/PersonPage';
import MentToPage from '../pages/main/MentToPage';
import ResultPage from '../pages/result';
import FinalResult from './FinalResult';
import MovePage from './MovePage';
import MentFinish from './MentFinish';
import ScrollToTop from './SrollToTop';
import { isMobile } from 'react-device-detect';
import BorderImg from './BorderImg';

const Router = () => {
  return (
    <>
    <ScrollToTop />
   
    
    <Routes >
   
        {/* 기본 화면 & 로그인 & 회원가입 */}
        <Route path='/' element ={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>

        <Route path='/main/:name' element={<Home />}/>
        <Route path='/:name/start' element={<StartPage/>}/>
        {/* 테스트 화면 */}
        <Route path='/:name/balance/:id/' element={<BalancePage />}/>
        <Route path='/:name/value' element={<ValuePage />}/>
        <Route path='/:name/value/finish' element={<FinishMy />}/>
        <Route path='/:name/person' element={<PersonPage />}/>
        <Route path='/:name/ment' element={<MentToPage/>}/>
        {/* 결과 입력 및 출력 화면 */}
        <Route path='/:name/result' element={<ResultPage/>}/>
        <Route path='/:name/final' element={<FinalResult/>}/>

        {/* 로딩 화면 */}
        <Route path='/:name/start/loading' element={<MovePage index={0} link="/balance/1"/>}/>
        <Route path='/:name/balance/loading' element={<MovePage index={1} link="/value"/>}/>
        <Route path='/:name/value/loading' element={<MovePage index={2} link="/person"/>}/>
        <Route path='/:name/ment/loading' element={<MentFinish/>}/>

        <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>

    </>
  )
}

export default Router
