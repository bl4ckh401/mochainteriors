import React from 'react'
import { FooterContactData, FooterNavData } from '../utils/FooterData'

function Footer() {
    return (
        <div className='footer_main'>
            <div className='allfooter_content'>
                <div className='footer_logo'>
                    <img src='/mocha-logo.png' className='img_logo' alt='mocha logo' />
                </div>
                <div className='footer_links'>
                    <div className='contact_menu'>
                        <ul className='contact_menu'>
                            {FooterContactData.map((method) => {
                                return (
                                    <li>{method.title}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='contact_menu'>
                        <ul className='contact_menu'>
                            {FooterNavData.map((nav) => {
                                return (
                                    <li>{nav.title}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer