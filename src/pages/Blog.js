import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogCard from '../components/BlogCard'

function Blog() {
    const [blogPosts, setBlogPosts] = useState([])
    const navigate = useNavigate()

    const onLoad = () => {
        const requestOptions = {
            method: "GET",
            headers: { 'Content-Type': "application/json" },
        }
        fetch('http://127.0.0.1:8000/api/blog/', requestOptions)
            .then(response => response.json())
            .then((response) => {
                setBlogPosts(response)
                console.log(blogPosts)
            })
    }

    useEffect(() => {
        onLoad()
    }, [])
    return (
        <div className='blog_page'>
            <div className='blog_content'>
                {
                    blogPosts.map((post) => {
                        <BlogCard created_at={post.created_at} blog_slug={post.blog_slug} blog_title={post.blog_title} blog_post={post.blog_post} cover_image={post.blog_cover_image} />
                    })
                }
            </div>
        </div>
    )
}

export default Blog