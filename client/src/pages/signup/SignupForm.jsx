import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Mainview, { Minilogo } from "../../components/StyledTag";
import PageMoveButton from "../../components/Button/PageMoveButton";


const SignupForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const userData = (e) => {
    e.preventDefault();

    const user = {
      userId: id,
      userPassword: password,
      userPassword2: password2,
    };

    axios
      .post("https://chemylab.shop/signup", user)
      .then((res) => {
        if (res.data.isSuccess === "True") {
          alert("회원가입이 완료되었습니다.");
          navigate("/login");
        } else {
          alert(res.data.isSuccess);
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

        <input placeholder='비밀번호 확인' type='password' onChange={(e) => {
            setPassword2(e.target.value);
            console.log(e.target.value);
          }}/>
        {/* <input
          className="login"
          type="text"
          placeholder="아이디"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <br />
        <br />
        <input
          className="login"
          type="password"
          placeholder="비밀번호"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <br />
        <input
          className="login"
          type="password"
          placeholder="비밀번호 확인"
          onChange={(event) => {
            setPassword2(event.target.value);
          }}
        />
        <br />
        <br /> */}

        <PageMoveButton signup='true' style={{maxWidth: '100px'}} text='회원가입' onClick={userData}/>
  
    </Mainview>
  );
};

export default SignupForm;
