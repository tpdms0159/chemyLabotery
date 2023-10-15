import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function BalancePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.balance.find((item) => item.id === parseInt(id, 10)));
        setAllData(res.balance);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!data || !allData)
    return (
      <div>
        <Link to="/value">
          <button>Value</button>
        </Link>
      </div>
    );

  const next = parseInt(id, 10) + 1;

  const BalanceData = (value) => {

    console.log(value);
    axios.post("http://localhost:8000/balance", { value }, {
      headers: {
        Authorization: `Bearer ${token}` // 헤더에 토큰 포함해서 요청 보내기
      }
    })
    .then(response => console.log(response))
    .catch(error => console.error("There was an error!", error));
  };

  return (
    <div className="balancePage">
      <img alt="nonePick" src="/icons/logo.png" />
      <h3>우린 얼마나 잘 맞을까?</h3>
      <h1>
        {data.optionFirst} vs {data.optionTwo}
      </h1>
      <div className="buttonBox">
        <>
          <Link
            className="selectButton"
            to={`/balance/${next}`}
            onClick={() => BalanceData(1)}
          >
            <div>{data.optionFirst}</div>
          </Link>
          <Link
            className="selectButton"
            to={`/balance/${next}`}
            onClick={() => BalanceData(2)}
          >
            <div>{data.optionTwo}</div>
          </Link>
        </>
      </div>
    </div>
  );
}
