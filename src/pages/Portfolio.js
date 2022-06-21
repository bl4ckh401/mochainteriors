import React, { useEffect, useState } from 'react'
import PortfolioCard from '../components/PortfolioCard'

function Portfolio() {

    const [portfolio, setPortfolio] = useState([])

    const onLoad = () => {
        const requestOptions = {
            method: "GET",
            headers: { 'Content-Type': "application/json" },
        }
        fetch('http://127.0.0.1:8000/api/portfolio/', requestOptions)
            .then(response => response.json())
            .then((data) => {
                setPortfolio(data)
            })
        console.log(portfolio)
    }

    useEffect(() => {
        onLoad()
    }, []);

    return (
        <div className='portfolio_page' id='portfolio'>
            <h1>PORTFOLIO</h1>
            <div className='all_projects'>
                {
                    portfolio.map((work) => {
                        return (
                            <div>
                                <div>
                                    {work.get_category_display}
                                </div>
                                <PortfolioCard source={work.cover_image} tag={work.project_tag} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio