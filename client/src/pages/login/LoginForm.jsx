import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PageMoveButton from "../../components/Button/PageMoveButton";
import Mainview, { Minilogo, Button, Smalltext, Whiteback } from "../../components/StyledTag";
import Input from "../../components/Input";



const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const userData = (e) => {
    e.preventDefault();

    const user = {
      userId: id,
      userPassword: password,
    };
    // 로그인 정보 api
    axios
      .post("https://chemylab.shop/login", user)
      .then((res) => {
        if (res.data.isLogin === "True") {
          localStorage.setItem('accessToken', res.data.accessToken);
          navigate(`/main/${id}`);
        } else {
          alert(res.data.isLogin);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      });
  };


 
  return (
    <Mainview>
      
      <Minilogo alt="logo" src="../icons/logo.png" />

      <input placeholder='아이디' onChange={(e) => {
              setId(e.target.value);
              console.log(e.target.value);
            }}/>
      

      <input placeholder='비밀번호' type='password' onChange={(e) => {
              setPassword(e.target.value);
              console.log(e.target.value);
            }}/>

      <PageMoveButton style={{maxWidth: '280px'}} text='로그인하고 케미 확인하기' onClick={userData}/>

      <Link to="/signup" className="signBox">
        <Smalltext> 아직 계정이 없다면? </Smalltext> 
        <button className="moveButton" style={{
          width: '100px',
          height: '37px',
          fontSize: '15px',
          }}
       > 회원가입 </button>

        </Link>
      
    </Mainview>
  );
};

export default LoginForm;
