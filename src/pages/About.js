import React from 'react'
import CompanyCard from '../components/CompanyCard'

function About() {
    return (
        <div className='about_main'>
            <h1>ABOUT US</h1>
            <div className='about_page'>
                <div className='company_description'>
                    <CompanyCard title="The Company"
                        card_shape="long_horizontal_rectangle"
                        content_style="all_content"
                        card_title="long_content_title"
                        card_text="long_text"
                        text="We are a leading design studio specializing in design and build projects for both residential, show homes for developers and other commercial interior design projects. Our portfolio includes both new home construction and renovations of all sizes, small to large.
                                                    Supported by a team of experts who are able to offer professional services in joinery, gypsum, electrical, paint works etc. We design and install with a key focus on curating innovative designs, quality products and timely delivery." />
                    {/* <div className='vission_mission'>
                        <CompanyCard title="Our Mission"
                            card_shape="our_mission_rectangle"
                            content_style="all_content"
                            card_title="our_mission_title"
                            card_text="mission_text"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                        <CompanyCard title="Our Vision"
                            card_shape="our_vission_rectangle"
                            content_style="all_content"
                            card_title="our_vission_title"
                            card_text="vission_text"
                            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." /> */}
                </div>
                <button className='about_btn'>Find Out More</button>
            </div>
        </div>
    )
}

export default About