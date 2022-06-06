import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function BlogPostPage() {
    const { blog_slug } = useParams()
    const [blogPostData, setBlogPostData] = useState({})

    const getBlogPost = () => {
        const RequestData = {
            method: "GET",
            headers: { 'Content-Type': "application/json" }
        }
        fetch(`http://127.0.0.1:8000/api/blogpost/?blog_slug=` + blog_slug, RequestData)
            .then((response) => response.json())
            .then((data) => {
                setBlogPostData(data)
            })
        console.log(blogPostData)
    }
    useEffect(() => {
        getBlogPost()
    }, [])
    return (
        <div className='blog_page'>
            <div className='blogpost'>
                <h1>{blogPostData.blog_title}</h1>
                <div>
                    {(`${blogPostData.blog_post}`)}
                </div>
            </div>
        </div>
    )
}

export default BlogPostPage