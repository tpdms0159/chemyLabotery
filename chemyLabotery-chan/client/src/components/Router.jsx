import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from '../pages/login';
import SignUpPage from '../pages/signup';
import HomePage from '../pages/home';
import Home from '../pages/main';
import StartPage from '../pages/main/StartPage';
import BalancePage from "../pages/main/BalancePage";
import ValuePage from '../pages/main/ValuePage';
import PersonPage from '../pages/main/PersonPage';
import MentToPage from '../pages/main/MentToPage';
import ResultPage from '../pages/result';
import FinalResult from './FinalResult';


const Router = () => {
  return (
    <Routes>
        <Route path='/' element ={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/main' element={<Home />}/>
        <Route path='/start' element={<StartPage/>}/>
        <Route path='/balance/:id' element={<BalancePage />}/>
        <Route path='/value' element={<ValuePage />}/>
        <Route path='/person' element={<PersonPage />}/>
        <Route path='/ment' element={<MentToPage/>}/>
        <Route path='/result' element={<ResultPage/>}/>
        <Route path='/final' element={<FinalResult/>}/>
        <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  )
}

export default Router
