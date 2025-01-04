import React from 'react';
import './footer.scss'
import {Link} from "react-router-dom";
import paymentMethod1 from '../../assets/images/paymentMethod.svg'
import paymentMethod2 from '../../assets/images/paymentMethod2.svg'
import paymentMethod3 from '../../assets/images/paymentMethod3.svg'
import paymentMethod4 from '../../assets/images/paymentMethod4.svg'
import paymentMethod5 from '../../assets/images/paymentMethod5.svg'
import paymentMethod6 from '../../assets/images/paymentMethod6.svg'
import fifa from '../../assets/images/fifa.svg'
import nhl from '../../assets/images/nhl.svg'
import wta from '../../assets/images/wta.svg'
import fiba from '../../assets/images/fiba.svg'
import atr from '../../assets/images/atr.svg'
import uefa from '../../assets/images/uefa.svg'
import hf from '../../assets/images/hf.svg'
import nba from '../../assets/images/nba.svg'


const Footer = ({className}) => {
    return <footer className={`footer ${className}`}>
        <div className='footer-body'>
            <div className='footer-header G-justify-between'>
                <Link className='footer-logo' to={'/'}>
                    <img src="" alt="logo"/>
                </Link>
                <div className='age-limit'>18+</div>
            </div>
            <nav className='footer-menu G-center'>
                <ul className='footer-menu-list G-align-center'>
                    <li className='footer-menu-item'>
                        <Link className='footer-menu-link' to={'/'}>About Us</Link>
                    </li>
                    <li className='footer-menu-item'>
                        <Link className='footer-menu-link' to={'/'}>Rules</Link>
                    </li>
                    <li className='footer-menu-item'>
                        <Link className='footer-menu-link' to={'/'}>Contacts</Link>
                    </li>
                    <li className='footer-menu-item'>
                        <Link className='footer-menu-link' to={'/'}>Mobile version</Link>
                    </li>
                    <li className='footer-menu-item'>
                        <Link className='footer-menu-link' to={'/'}>Affiliate program</Link>
                    </li>
                    <li className='footer-menu-item'>
                        <Link className='footer-menu-link' to={'/'}>FAQ</Link>
                    </li>
                </ul>
            </nav>
            <div className='payment-methods G-align-center'>
                <div className='download-app-cnt G-align-center'>
                    <div className='download-app G-align-center'>
                        <p className='download-app-text'>Download</p>
                        <i className='icon icon-android'></i>
                        <i className='icon icon-iphone'></i>
                    </div>
                </div>

                <div className='payment-methods-cnt G-align-center'>
                    <div className='methods-item'>
                        <img src={paymentMethod1} alt="paymentMethod"/>
                    </div>
                    <div className='methods-item'>
                        <img src={paymentMethod2} alt="paymentMethod"/>
                    </div>
                    <div className='methods-item'>
                        <img src={paymentMethod3} alt="paymentMethod"/>
                    </div>
                    <div className='methods-item'>
                        <img src={paymentMethod4} alt="paymentMethod"/>
                    </div>
                    <div className='methods-item'>
                        <img src={paymentMethod5} alt="paymentMethod"/>
                    </div>
                    <div className='methods-item'>
                        <img src={paymentMethod6} alt="paymentMethod"/>
                    </div>
                </div>
                <div className='contact-metods'>
                    <i className='icon icon-telegram'></i>
                </div>
            </div>

            <div className='games-logos G-align-center'>
                <div className='game-logo'>
                    <img src={fifa} alt="fifa"/>
                </div>
                <div className='game-logo'>
                    <img src={nhl} alt="logo"/>
                </div>
                <div className='game-logo'>
                    <img src={wta} alt="logo"/>
                </div>
                <div className='game-logo'>
                    <img src={fiba} alt="logo"/>
                </div>
                <div className='game-logo'>
                    <img src={atr} alt="logo"/>
                </div>
                <div className='game-logo'>
                    <img src={uefa} alt="logo"/>
                </div>
                <div className='game-logo'>
                    <img src={hf} alt="logo"/>
                </div>
                <div className='game-logo'>
                    <img src={nba} alt="logo"/>
                </div>
            </div>
        </div>
    </footer>
};

export default Footer;