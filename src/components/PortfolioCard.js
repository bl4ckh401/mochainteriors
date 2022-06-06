import React from 'react'

function PortfolioCard(props) {
    return (
        <div className='done_projects' style={{ height: 343, width: 343 }}>
            <span className='cover_projects' >
                <img src={props.source} alt='Completed Projects' style={{ height: 343, width: 343, justifyContent: 'center', alignItems: 'center' }} />
                <span style={{ color: "white", zIndex: 15, position: "absolute", paddingTop: "50%", paddingRight: "25%", paddingLeft: "25%", paddingBottom: "50%" }}>{props.tag}</span>
            </span>
        </div >

    )
}

export default PortfolioCard