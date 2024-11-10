import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Header from './Header'

const Login = () => {
  const navigate = useNavigate();
  const [log, setLog] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const style = {
    backgroundColor: '#e6e6fa',
    minHeight: "100vh",
  };

  const Sign = async (e) => {
    e.preventDefault();
    try {
      const url = process.env.REACT_APP_ENDPOINT06;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify({
          "name": log,
          "password": pass
        })
      })
      const data = await response.json();
      if (response.status === 400) {
        setErr(data.error);
      }
      else {
        console.log(data)
        sessionStorage.setItem('token', data.authToken);
        navigate("/Data");
        setErr('');
      }

    } catch (error) {
      setErr(error);
    }
  }

  return (
    <>
      <div className="kox" style={style}>
        <Header title="QUATLAS AUTHORIZATION" />
        <div class="popup-container">
          {err ?
            (
              <div class="popup error-popup">
                <div class="popup-icon error-icon">
                  <svg
                    class="error-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="error-message">{err}</div>
                <div class="popup-icon close-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    class="close-svg"
                  >
                    <path
                      d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                      class="close-path"
                    ></path>
                  </svg>
                </div>
              </div>
            )
            : ''}
        </div>
        <form action="" class="login" onSubmit={Sign}>
          <h1 class="title">Signin</h1>
          <input type="text" class="log" required="" value={log} onChange={(e) => setLog(e.target.value)} placeholder='Enter your username' />
          <input type="password" class="log" required="" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter your password' />
          <button class="signin">Submit</button>
        </form>
      </div>
      <div className="etios">
        <p className="msg">2024 © Quatlas, All Rights Reserved.</p>
        <p className="msg">Designed By Pavan Reddy</p>
        <p className="msg">Powered By Madhouse</p>
      </div>
    </>
  )
}

export default Login
