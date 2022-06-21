import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {

    //     const onLoad = () => {
    //         const requestOptions = {
    //             method: "POST",
    //             headers: { 'Content-Type': "application/json" },
    //             body: JSON.stringify({
    //                 about_us: about_us
    //             })
    //         }
    //         fetch('http://127.0.0.1:8000/api/updateAbout/', requestOptions)
    //             .then(response => response.json())
    //             .then((data) => {
    //                 setPortfolio(data)
    //             })
    //         console.log(portfolio)
    //     }

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']                                         // remove formatting button
        ]
    };


    const [text, setText] = useState("")

    const handleChange = (value) => {
        setText(value)
    }
    return (
        <div className='text-editor'>Editor
            <ReactQuill theme='snow' modules={modules} value={text} onChange={handleChange}></ReactQuill>
        </div>
    )
}

export default Editor