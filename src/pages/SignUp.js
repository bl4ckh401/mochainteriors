import React, { useState } from 'react'
import CSRFToken from '../components/CSRFToken'

function SignUp() {

    const [userName, setuserName] = useState("")
    const [password, setpassWord] = useState("")
    const [email, setEmail] = useState("")
    const [confirm, setConfirm] = useState("")

    const handleSignup = (event) => {
        event.preventDefault();
        try {
            const RequestData = {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({
                    email: email,
                    username: userName,
                    password1: password,
                    password2: confirm
                })
            }
            fetch('http://127.0.0.1:8000/accounts/register/', RequestData)
                .then(response => response.json())
                .then((data) => {
                    console.log(data)
                })

        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeUserName = (event) => {
        event.preventDefault();
        setuserName(event.target.value)
    }

    const handleChangePassword = (event) => {
        event.preventDefault();
        setpassWord(event.target.value)
    }

    const handleChangeEmail = (event) => {
        event.preventDefault();
        setEmail(event.target.value)
    }

    const handleChangeConfirm = (event) => {
        event.preventDefault();
        setConfirm(event.target.value)
    }
    return (
        <div className='sign_up'>
            <form method='post' className='form'>
                <CSRFToken />
                <div className='form'>
                    <input type="email" className="input" onChange={handleChangeEmail} placeholder="Email" />
                    <input type="text" className="input" onChange={handleChangeUserName} placeholder="Username" />
                    <input type="password" className="input" onChange={handleChangePassword} placeholder="Password" />
                    <input type="password" className="input" onChange={handleChangeConfirm} placeholder="Confirm Password" />
                    <div className=''>
                        <button className='' onClick={handleSignup}>Sign Up</button>
                    </div>
                    <div className=''>
                        <button className=''>Login</button>
                    </div>
                </div>

            </form >
        </div>
    )
}

export default SignUp