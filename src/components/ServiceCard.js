import React from 'react'
import { GiSpanner } from 'react-icons/gi'


function ServiceCard(props) {
    return (
        <div className={props.card_shape}>
            <div className={props.content_style}>
                <div>
                    {props.icon}
                </div>
                <div className={props.card_title}>
                    <h3>{props.title}</h3>
                </div>
                <div className={props.card_text}>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard