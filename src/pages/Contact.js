import React, { useState } from 'react'
// import { IoIosCall, IoIosLocate, IoIosMail } from 'react-icons/io'

function Contact() {

    const [messages, setMessages] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")

    const handleInput = (event) => {
        setMessages(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleSubject = (event) => {
        setSubject(event.target.value)
    }

    const handleSendMessage = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: "POST",
            header: {
                'Accept': '*/*',
                'content-type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify({
                email: email,
                subject: subject,
                messages: messages,
            })
        }
        fetch('http://127.0.0.1:8000/api/send-message/', requestOptions)
            .then(response => response.text())
            .then((data) => {
                console.log(data)
            })
    }

    return (
        <div className='chats'>
            <h1>CONTACT</h1>
            <h5 className='get_in_touch'>Contact Mocha Interiors team for any queries you have.<br /> Please get in touch with us via the contacts below or by filling the contact us form.</h5>
            <div className="chatpageContent">
                <div className="postChat">
                    <div className="location">
                        {/* <IoIosLocate className="sendIcon"
                            style={{
                                height: '30px',
                                width: '30px',
                                color: 'black'
                            }} /> */}
                        <h4 className="texts">Nairobi, Kenya</h4>
                    </div>
                    <div className="location">
                        {/* <IoIosCall className="sendIcon"
                            style={{
                                height: '30px',
                                width: '30px',
                                color: 'black'
                            }} /> */}
                        <h4 className="texts">(254)0711738855</h4>
                    </div>
                    <div className="location">
                        {/* <IoIosMail className="sendIcon"
                            style={{
                                height: '30px',
                                width: '30px',
                                color: 'black'
                            }} /> */}
                        <h4 className="textsemail">info@mochainteriors.co.ke</h4>
                    </div>
                </div>
                <div className="postChat">
                    <form className="postChatForm">
                        <input type="email" placeholder="example@gmail.com" rows={3} className="emailinput" onChange={handleEmail} />
                        <textarea
                            type="text"
                            className="emailinput"
                            placeholder="Subject"
                            rows={3}
                            onChange={handleSubject}
                        />
                        <textarea
                            type="text"
                            className="emailinput"
                            placeholder="Enter Message"
                            onChange={handleInput}
                            rows={6}
                        />
                        <button className="SubmitContact" onClick={handleSendMessage}>
                            <h4 className="texts" >SUBMIT</h4>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact