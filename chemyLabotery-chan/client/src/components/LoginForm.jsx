import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

    axios
      .post("http://localhost:8000/login", user)
      .then((res) => {
        console.log(res);
        if (res.data.isLogin === "True") {
          localStorage.setItem('accessToken', res.data.accessToken);
          navigate("/main");
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
    <div className="mainview">
      <img alt="logo" src="../icons/logo.png" />
      <form onSubmit={userData}>
        <input
          className="login"
          type="text"
          placeholder="아이디"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          className="login"
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <p>계정이 없으신가요?</p> <Link to="/signup">회원가입</Link> <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;
