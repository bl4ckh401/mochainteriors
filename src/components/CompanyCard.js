import React from 'react'

function CompanyCard(props) {
    return (
        <div className={props.card_shape}>
            <div className={props.content_style}>
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

export default CompanyCard