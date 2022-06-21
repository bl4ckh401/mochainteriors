import React from 'react'
import parse from 'html-react-parser';

function BlogCard(props) {

    //     onClick = {() => {
    //         const requestOptions = {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         }
    //         fetch(`http://127.0.0.1:8000/api/blogpost/?blog_slug=` + props.blog_slug, requestOptions)
    //             .then((response) => {
    //                 if (response.ok) {
    //                     // Navigate(`/blog/${props.blog_slug}`)
    //                     console.log(response)
    //                 }
    //             })
    //     }
    // }

    return (
        <div className='blog_container'>
            <div className='blog_post'>
                <img src={props.cover_image} alt='Cover Image' style={{ width: "100%", height: 360 }} />
                <div className='blog_post' style={{ lineHeight: 0.5 }}>
                    <h6 style={{ padding: 20, paddingBottom: 0 }}>{props.created_at}</h6>
                    <h1 style={{ padding: 20, paddingTop: 0 }}>{props.blog_title}</h1>
                </div>
                <div>
                    <p style={{ padding: 20, }}>
                        {parse(`${props.blog_post}`)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard