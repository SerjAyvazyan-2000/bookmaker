import React, {useEffect, useState} from 'react';
import './header.scss'

import en from '../../assets/images/en.svg'
import freeMoney from '../../assets/images/freeMoney.webp'

import {Link} from "react-router-dom";
import {useBalance} from "../../BalanceContext";


const Header = () => {
    // const [timezones, setTimezones] = useState([]);
    const { balance } = useBalance();

    const [menuVisibility, setMenuVisibility] = useState({
        isListVisible: false,
        isTopUpVisible: false,
        isAccountVisible: false,
        isLineVisible: false,

    });


    const toggleMenuVisibility = (menuKey) => {
        setMenuVisibility((prevState) => ({
            ...prevState,
            [menuKey]: !prevState[menuKey],
        }));
    };


    // useEffect(() => {
    //     fetch('http://worldtimeapi.org/api/timezone')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Ошибка запроса');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             const formattedData = data.flatMap(item => item.split('\n'));
    //             setTimezones(formattedData);
    //         })
    //         .catch(error => {
    //             console.error('Ошибка:', error);
    //         });
    // }, []);


    return <header>
        <div className='container'>
            <div className='header-bottom G-align-center '>
                <div className='header-bottom-tolls G-align-center'>
                    <div className='header-download-apps G-align-center'>
                        <p className='download-text'>Download</p>
                        <div className='download-icons G-align-center'>
                            <i className='icon icon-android'></i>
                            <i className='icon icon-iphone'></i>

                        </div>
                    </div>

                    <div className='bypassing-blockages'>
                        <i className='icon icon-blockages'></i>
                        <p>Bypassing blockages</p>
                    </div>

                    <div className='header-actions G-align-center'>
                        <div className='odds-format G-align-center'>
                            <i className='icon icon-odds-format'></i>
                            <p>DECIMAL</p>
                            <i className='icon icon-arrow-down'></i>

                        </div>

                        <div onClick={()=>toggleMenuVisibility('isListVisible')} className='header-data G-align-center'>
                            <p>21:12</p>
                            <i
                                className={`icon icon-arrow-down ${menuVisibility.isListVisible ? 'active' : ''}`}
                            ></i>

                            <div className={`data-sub-box  ${menuVisibility.isListVisible ? 'active' : ''}`}>
                                <div onClick={()=>toggleMenuVisibility('isListVisible')} className='sub-box-header G-justify-between'>
                                    <div className='sub-box-icon G-align-center'>
                                        <i className='icon icon-clock'></i>
                                        <p>18:33</p>
                                    </div>
                                    <i className='icon icon-arrow-down'></i>


                                </div>

                                {/*<div className='data-sub-list'>*/}
                                {/*    {timezones.map((timezone, index) => (*/}
                                {/*        <div key={index} className='data-sub-item'>*/}
                                {/*            {timezone}*/}
                                {/*        </div>*/}
                                {/*    ))}*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        <div className='header-languages G-align-center'>
                            <div className='languages-flag'>
                                <img src={en} alt="ru"/>
                            </div>
                            <p>EN</p>
                            <i className='icon icon-arrow-down'></i>


                        </div>

                    </div>

                    <Link to={'/'} href='#' className='free-money G-align-center'>
                        <div className='free-money-img'>
                            <img src={freeMoney} alt=""/>
                        </div>
                        <button className='free-money-btn'>FREE MONEY</button>
                    </Link>

                    <Link to={'/'} href='#' className='discount-link G-align-center'>
                        <i className='icon icon-discount'></i>
                        <button className='discount-btn'>Promotions</button>
                    </Link>

                </div>

                <div className='header-bottom-actions G-align-center'>
                    <Link to={'/replenish'} onClick={()=>toggleMenuVisibility('isTopUpVisible')} className={`top-up-btn G-align-center`}>
                        <i className='icon icon-top-up'></i>
                        <span>{balance} so'm</span>
                        <span>Top up</span>
                        <i className='icon icon-arrow-down-black'></i>
                        {/*<div className={`top-up-sub-block ${menuVisibility.isTopUpVisible ? 'active ' : ''}`}>*/}
                        {/*    <div onClick={()=>toggleMenuVisibility('isTopUpVisible')} className='top-up-sub-header  G-align-center'>*/}
                        {/*        <div className='top-sub-icon G-align-center'>*/}
                        {/*            <i className='icon icon-top-up'></i>*/}
                        {/*            <p>Basic</p>*/}
                        {/*            <p>0,00 so'm</p>*/}
                        {/*        </div>*/}
                        {/*        <i className='icon icon-arrow-down'></i>*/}
                        {/*    </div>*/}
                        {/*    <div className='top-up-sub-cnt'>*/}
                        {/*        <div className='top-up-sub-item G-align-center'>*/}
                        {/*            <i className='icon icon-top-up'></i>*/}
                        {/*            <p>КОИНЫ:0</p>*/}

                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </Link>

                    <button onClick={()=>toggleMenuVisibility('isAccountVisible')}
                            className={`personal-account G-align-center ${menuVisibility.isAccountVisible ? 'active' : ''}`}>
                        <i className="icon icon-odds-format"></i><
                        p>Personal Account</p>
                        <i className="icon icon-arrow-down"></i>

                        <div className={`account-sub-block ${menuVisibility.isAccountVisible ? 'active' : ''}`}>
                            <div className='account-sub-header '>
                                <div className='account-sub-title G-justify-between'>
                                    <div className='account-sub-name G-align-center'>
                                        <i className='icon icon-user'></i>
                                        <p>Personal Account</p>
                                    </div>
                                    <i className='icon icon-arrow-down'></i>

                                </div>
                                <h3 className="user-email ">ayvazyanserj3@gmail.com</h3>
                            </div>
                            <div className='account-sub-cnt'>
                                <div className='account-sub-item G-justify-between'>
                                    <div className='account-sub-text G-align-center'>
                                        <i className='icon icon-account-sub icon-account-sub1'></i>
                                        <p>COINS</p>
                                    </div>
                                    <p className='account-number-clue'>0</p>
                                </div>

                                <div className='account-sub-item G-justify-between'>
                                    <div className='account-sub-text G-align-center'>
                                        <div className='account-text-clue G-center'>
                                            <span>1</span>
                                        </div>
                                        <p>Level</p>
                                    </div>
                                    <span className='account-item-clue'>Newbie</span>
                                </div>

                                <div className='account-sub-item G-justify-between'>
                                    <div className='account-sub-text G-align-center'>
                                        <i className='icon icon-account-sub icon-account-sub2'></i>
                                        <p>My status</p>
                                    </div>
                                </div>

                                <div className='account-sub-item G-justify-between'>
                                    <div className='account-sub-text G-align-center'>
                                        <i className='icon icon-account-sub icon-account-sub3'></i>
                                        <p>Betting history</p>
                                    </div>
                                </div>

                                <div className='account-sub-item G-justify-between'>
                                    <div className='account-sub-text G-align-center'>
                                        <i className='icon icon-account-sub icon-account-sub4'></i>
                                        <p>Top up your account</p>
                                    </div>
                                </div>

                                <div className='account-sub-item G-justify-between'>
                                    <div className='account-sub-text G-align-center'>
                                        <i className='icon icon-account-sub icon-account-sub5'></i>
                                        <p>Withdraw from account</p>
                                    </div>
                                </div>

                                <div className='account-sub-item G-justify-between'>
                                    <div className='account-sub-text G-align-center'>
                                        <i className='icon icon-account-sub icon-account-sub6'></i>
                                        <p>PERSONAL DATA</p>
                                    </div>
                                </div>

                                <div className='account-sub-item G-justify-between'>
                                    <div className='account-sub-text G-align-center'>
                                        <i className='icon icon-account-sub icon-account-sub7'></i>
                                        <p>Settings</p>
                                    </div>
                                </div>
                                <div className='account-sub-item G-justify-between'>
                                    <div className='account-sub-text G-align-center'>
                                        <i className='icon icon-account-sub icon-account-sub8'></i>
                                        <p> Invite friends</p>
                                    </div>
                                </div>
                                <div className='account-sub-item G-justify-between'>
                                    <div className='account-sub-text G-align-center'>
                                        <i className='icon icon-account-sub icon-account-sub9'></i>
                                        <p>FAQ</p>
                                    </div>
                                </div>


                                <div className='account-sub-item G-justify-between'>
                                    <div className='account-sub-text G-align-center'>
                                        <i className='icon icon-account-sub icon-account-sub10'></i>
                                        <p>Log out</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </button>
                </div>

            </div>
            <div className='header-top G-align-center'>
                <Link className='header-logo' to={'/home'}>
                    <img src='' alt="logo"/>
                </Link>

                <nav className='header-menu '>
                    <ul className='menu-list G-align-center'>
                        <li className='menu-item'>
                            <Link className='menu-link menu-link-bg' to={''}>
                                <span>New Year 2025</span>
                            </Link>
                        </li>
                        <li onClick={()=>toggleMenuVisibility('isLineVisible')} className='menu-item'>
                            <Link className='menu-link' to={''}>
                                <span>Line</span>
                                <i className='icon icon-arrow-down'></i>
                            </Link>

                            <div className={`sub-menu ${menuVisibility.isLineVisible ? 'active' : ''}`}>
                                <div className='sub-menu-header'>
                                    Championship results
                                </div>
                            </div>
                        </li>

                        <li className='menu-item'>
                            <Link className='menu-link' to={''}>
                                <span>LIVE</span>
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link className='menu-link' to={'/casino'}>
                                <span>Casino</span>
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link className='menu-link' to={''}>
                                <span>Live Casino</span>
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link className='menu-link menu-link-aviator' to={''}>
                                <span>Aviator</span>
                            </Link>
                        </li>

                        <li className='menu-item'>
                            <Link className='menu-link menu-link-border' to={''}>
                                <i className='icon icon-basket'></i>
                                <span>BONUS BUY</span>
                            </Link>
                        </li>

                        <li className='menu-item'>
                            <Link className='menu-link' to={''}>
                                <span>КИБЕРСПОРТ</span>
                            </Link>
                        </li>

                        <li className='menu-item'>
                            <Link className='menu-link' to={''}>
                                <span>ПОКЕР</span>
                            </Link>
                        </li>

                        <li className='menu-item'>
                            <Link className='menu-link' to={''}>
                                <span>ТОТО</span>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>

        </div>
    </header>
};

export default Header;