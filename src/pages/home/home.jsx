import React from 'react';
import './home.scss'
import Properties from "../../components/properties/properties";
import Express from "../../components/express/express";
import {Link} from "react-router-dom";
import casinoStar from '../../assets/images/casinoStar.svg'
import {Swiper, SwiperSlide} from "swiper/react";
import creativeSlide1 from '../../assets/images/creativeSlide1.webp'
import creativeSlide2 from '../../assets/images/creativeSlide2.webp'
import creativeSlide3 from '../../assets/images/creativeSlide3.webp'
import creativeSlide4 from '../../assets/images/creativeSlide4.webp'
import creativeSlide5 from '../../assets/images/creativeSlide5.webp'

import {EffectCoverflow} from 'swiper/modules';


const Home = () => {
    return <section className='home-section  '>
        <div className='hero-slider-page '>

            <div className='hero-slider-body'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    initialSlide={2}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 40,
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,

                    }}
                    pagination={true}
                    modules={[EffectCoverflow]}
                >
                    <SwiperSlide>
                        <div className='hero-slider-item'>
                            <img src={creativeSlide1} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero-slider-item'>
                            <img src={creativeSlide2} alt=""/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='hero-slider-item'>
                            <img src={creativeSlide3} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero-slider-item'>
                            <img src={creativeSlide4} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero-slider-item'>
                            <img src={creativeSlide5} alt=""/>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </div>

        <div className='home-main-cnt'>
            <div className='container'>
                <div className='home-info-header G-justify-end'>
                    <div className='info-header-cnt G-align-center'>
                        <button className='info-header-btn G-align-center'>
                            <i className='icon icon-live'></i>
                            <span>LIVE</span>
                        </button>
                        <button className='info-header-btn G-align-center'>
                            <i className='icon icon-line'></i>
                            <span>Line</span>
                        </button>
                        <label className='search-label G-align-center'>
                            <i className='icon icon-search'></i>
                            <input type="search" placeholder="Search..." className='search-input'/>
                        </label>
                    </div>

                </div>

                <Properties/>
                <Express/>


                <div className='hero-sticky-left'>
                    <nav className='hero-left-menu'>
                        <ul className='left-menu-list'>
                            <li className='left-menu-item'>
                                <Link className='left-menu-link' to={'/'}>
                                    <i className='icon icon-left-menu icon-home'></i>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className='left-menu-item'>
                                <Link className='left-menu-link' to={'/'}>
                                    <i className='icon icon-left-menu icon-star2'></i>
                                    <span>The Chosen Ones</span>
                                </Link>
                            </li>

                            <li className='left-menu-item'>
                                <Link className='left-menu-link' to={'/'}>
                                    <i className='icon icon-left-menu icon-time'></i>
                                    <span>The nearest</span>
                                    <i className='icon left-menu-arrow  icon-arrow-down'></i>

                                </Link>
                            </li>

                        </ul>

                    </nav>
                    <nav className='left-big-menu'>
                        <ul className='big-menu-list'>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Football</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Basketball</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Dota 2</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Counter-Strike</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Tennis</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Table tennis</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Волейбол</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Единоборства</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Boxing</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Fist fights</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Hockey</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Handball</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Futsal</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>American Football</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Baseball</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Баскетбол NCAA</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Billiards</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Floorball</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Cricket</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Rugby</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Darts</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>T-basket</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>T-kick</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Lacrosse</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Hurling</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Gaelic Football</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Bandy</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Скачки</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Dog racing</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Chariot racing</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Lagoon of Legends</Link>
                            </li>
                            <li className='big-menu-item'>
                                <Link className='big-menu-link' to={'/'}>Valorant</Link>
                            </li>


                        </ul>
                    </nav>

                </div>
                <div className='home-right-cnt'>
                    <div className='home-advertising G-image'>
                        <h3>GET +10% TO THE <span className='text-wrap'>COEFFICIENT</span></h3>
                        <p>for express trains of 4 or more events!</p>
                    </div>
                    <div className='coupon-widget'>
                        <div className='coupon-widget-tabs G-align-center'>
                            <button className='widget-tab G-align-center'>
                                <i className='icon icon-badge'></i>
                                <p>Coupon</p>
                            </button>
                            <button className='widget-tab G-align-center'>
                                <i className='icon icon-badge2'></i>
                                <p>My bets</p>
                            </button>

                        </div>
                        <div className='fast-bets G-align-center'>
                            <div className='fast-bets-switch'></div>
                            <span className='fast-bets-text'>Fast Bets</span>
                        </div>
                    </div>
                    <div className='control-bets G-align-center'>
                        <div className='control-bets-numbers'>
                            <div className='bets-number-titles G-align-center'>
                                <p>Bet amount</p>
                                <i className='icon icon-arrow-down-gray'></i>
                            </div>
                        </div>
                        <div className='control-bets-counter G-justify-between'>
                            <button className='bets-minus'>-</button>
                            <button className='bets-result'>5000</button>
                            <button className='bets-plus'>+</button>

                        </div>
                    </div>
                    <div className='top-up-cnt'>
                        <button className='home-top-up-btn'>Top up your account</button>

                    </div>
                    <div className='place-bet-block'>
                        <div className='selection_main G-justify-between'>
                            <div className='selection_main-cnt G-align-center'>
                                <i className='icon icon-selection'></i>
                                <p>Basic</p>
                            </div>
                            <div className='selection_main-result'>
                                <p>0,00 so'm</p>
                            </div>


                        </div>

                        <div className='collapse_header G-justify-between'>
                            <div className='promeo_main-cnt G-align-center'>
                                <i className='icon icon-selection'></i>
                                <p>PROMO CODE</p>
                            </div>
                            <button className="collapse_toggle"></button>


                        </div>

                        <div className='toggleButton_label G-align-center'>
                            <div className="toggleButton_icon"></div>
                            <p>Accept changes in coefficients</p>
                        </div>

                        <div className="extended-coupon G-center">
                            <button>
                                Place a bet
                            </button>
                        </div>
                    </div>
                    <div className='outer-banner-block'>
                        <div className='outer-banner-header casino-header G-justify-between'>
                            <div className='banner-header-texts G-align-center'>
                                <p>Casino</p>
                                <span>15278</span>
                            </div>
                            <div className='banner-header-tolls G-align-center'>
                                <p>All</p>
                                <i className='icon icon-arrow-line'></i>
                            </div>
                        </div>

                        <div className='outer-banner-stars G-align-center'>
                            <div className='outer-banner-star'>
                                <img src={casinoStar} alt=""/>
                            </div>
                            <div className='outer-banner-star'>
                                <img src={casinoStar} alt=""/>
                            </div>

                            <div className='outer-banner-star'>
                                <img src={casinoStar} alt=""/>
                            </div>
                            <div className='outer-banner-star'>
                                <img src={casinoStar} alt=""/>
                            </div>
                        </div>

                        <div className='outer-banner-header live-casino-header G-justify-between'>
                            <div className='banner-header-texts G-align-center'>
                                <p>Live Casino</p>
                                <span>15278</span>
                            </div>
                            <div className='banner-header-tolls G-align-center'>
                                <p>All</p>
                                <i className='icon icon-arrow-line'></i>
                            </div>
                        </div>

                        <div className='outer-banner-stars G-align-center'>
                            <div className='outer-banner-star'>
                                <img src={casinoStar} alt=""/>
                            </div>
                            <div className='outer-banner-star'>
                                <img src={casinoStar} alt=""/>
                            </div>

                            <div className='outer-banner-star'>
                                <img src={casinoStar} alt=""/>
                            </div>
                            <div className='outer-banner-star'>
                                <img src={casinoStar} alt=""/>
                            </div>

                            <div className='outer-banner-star'>
                                <img src={casinoStar} alt=""/>
                            </div>
                            <div className='outer-banner-star'>
                                <img src={casinoStar} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>


    </section>
};

export default Home;

