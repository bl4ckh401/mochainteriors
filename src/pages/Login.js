import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CSRFToken from '../components/CSRFToken';

function Login() {

    const navigate = useNavigate()
    const next = useParams()
    const [userName, setuserName] = useState("")
    const [password, setpassWord] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState("")

    const handleLogin = (event) => {
        event.preventDefault();
        try {
            const RequestData = {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({
                    username: userName,
                    password: password
                })
            }
            fetch('http://127.0.0.1:8000/api/token/', RequestData)
                .then(response => response.json())
                .then((data) => {
                    localStorage.setItem('token', data.access);
                    console.log(data)
                })
                .then(navigate("/shop"))

        } catch (error) {
            console.log(error)
        }
    }


    const handleLogout = () => {
        localStorage.removeItem('token');
    };



    const handleChangeUserName = (event) => {
        event.preventDefault();
        setuserName(event.target.value)
        console.log(userName)
    }

    const handleChangePassword = (event) => {
        event.preventDefault();
        setpassWord(event.target.value)
        console.log(password)
    }
    return (
        <div className='login'>
            <form method='post'>
                <CSRFToken />
                <div className='login'>
                    <input type="text" placeholder='username' className='input' name="username" onChange={handleChangeUserName}></input><br />
                    <input type="password" placeholder='password' className='input' name="password" onChange={handleChangePassword}></input><br />
                    <div>
                        <button type="submit" onClick={handleLogin}>Login</button>
                        <button type="submit" onClick={handleLogout}><a href='/register' >Sign up</a></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login