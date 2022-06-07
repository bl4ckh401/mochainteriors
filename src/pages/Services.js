import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { GiSpanner } from 'react-icons/gi'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { BsArrowsFullscreen, BsInbox, BsPeople, BsSun } from 'react-icons/bs'
import { CgFormatColor } from 'react-icons/cg'
import { FiSend } from 'react-icons/fi'


function Services() {
    return (
        <div className='service_page'>
            <div className='services_page'>
                <div className='first_col'>
                    <ServiceCard
                        title="The key to great design is capturing the spirit of the client and the essence of the space"
                        card_shape=""
                        content_style="all_content"
                        card_title="content_word_title"
                        card_text="service_text"
                        text="Whether you’re looking for someone who knows how to decorate a small space or someone experienced in designing kid-friendly living rooms, we’ve got the interior designer for you." />
                    <ServiceCard
                        icon={<GiSpanner color='white' size={60} style={{ marginTop: 20 }} />}
                        title="Small and large scale renovation"
                        card_shape="green_service_card"
                        content_style="all_content"
                        card_title="content_title"
                        card_text="long_text"
                        text="" />
                    <ServiceCard
                        icon={<AiOutlineDollarCircle color='white' size={60} style={{ marginTop: 20 }} />}
                        title="Personal Shopping"
                        card_shape="red_service_card"
                        content_style="all_content"
                        card_title="content_title"
                        card_text="long_text"
                        text="" />
                </div>
                <div className='table'>
                    <div className='second_col'>
                        <ServiceCard
                            icon={<BsArrowsFullscreen color='white' size={60} style={{ marginTop: 20 }} />}
                            title="Design Consulting"
                            card_shape="blue_service_card"
                            content_style="all_content"
                            card_title="content_title"
                            card_text="long_text"
                            text="Personal style consulting and room refresher services; includes accessory styling and acquisition and integration of individual items .One time consultation services for DIY customers.." />
                        <ServiceCard
                            icon={<CgFormatColor color='white' size={60} style={{ marginTop: 20 }} />}
                            title="Color Consulting"
                            card_shape="purple_service_card"
                            content_style="all_content"
                            card_title="content_title"
                            card_text="long_text"
                            text="Paint fabric, art and accessories" />
                    </div>
                    <div className='third_col'>
                        <ServiceCard
                            icon={<BsPeople color='white' size={60} style={{ marginTop: 20 }} />}
                            title="Project buying and sourcing"
                            card_shape="pink_service_card"
                            content_style="all_content"
                            card_title="content_title"
                            card_text="long_text"
                            text="Ranging from tile and stone, appliances furniture, wall coverings, window coverings fabric." />
                        <ServiceCard
                            icon={<BsInbox color='white' size={60} style={{ marginTop: 20 }} />}
                            title="Custom furniture design"
                            card_shape="yellow_service_card"
                            content_style="all_content"
                            card_title="content_title"
                            card_text="long_text"
                            text="individual furniture items, kitchen and bath cabinetry." />
                        <ServiceCard
                            icon={<BsSun color='white' size={60} style={{ marginTop: 20 }} />}
                            title="Organizational and storage solutions"
                            card_shape="purple_service_card"
                            content_style="all_content"
                            card_title="content_title"
                            card_text="long_text"
                            text="" />
                    </div>
                    <div className='fourth_col'>
                        <ServiceCard
                            icon={<FiSend color='white' size={60} style={{ marginTop: 20 }} />}
                            title="Space Planning"
                            card_shape="blue_service_card"
                            content_style="all_content"
                            card_title="content_title"
                            card_text="long_text"
                            text="Furniture layout, integrations, and design; includes custom kitchen and bath layout design." />
                        <ServiceCard
                            icon={<CgFormatColor color='white' size={60} style={{ marginTop: 20 }} />}
                            title="Art Acquisition"
                            card_shape="dark_green_service_card"
                            content_style="all_content"
                            card_title="content_title"
                            card_text="long_text"
                            text="identifying client’s personal art style, shopping, sourcing and design integration." />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services