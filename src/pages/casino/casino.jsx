import React, {useEffect, useRef} from 'react';
import './casino.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Autoplay, Pagination} from "swiper/modules";
import lightningGold from '../../assets/icons/lightningGold.svg'
import newYear from '../../assets/images/newYear.svg'

import crash from '../../assets/images/CRASH.svg'
import mostbet from '../../assets/images/MOSTBET.svg'
import recommend from '../../assets/images/RECOMMEND.svg'
import allGames from '../../assets/images/allGames.svg'
import promotionBanner from '../../assets/images/promotionBanner.svg'
import  promotions from '../../assets/images/promotion.svg'
import CasinoGames from "../../components/casinoGames/casinoGames";
import playicon from "../../assets/images/play.svg";
import {Link} from "react-router-dom";

import casinoSlide1 from "../../assets/images/casinoSlide1.webp";
import casinoSlide2 from "../../assets/images/casinoSlide2.webp";
import casinoSlide3 from "../../assets/images/casinoSlide3.webp";
import casinoSlide4 from "../../assets/images/casinoSlide4.webp";
import casinoSlide5 from "../../assets/images/casinoSlide5.webp";
import slot1 from "../../assets/images/slot1.webp";
import slot2 from "../../assets/images/slot2.webp";
import slot3 from "../../assets/images/slot3.webp";
import slot4 from "../../assets/images/slot4.webp";
import slot5 from "../../assets/images/slot5.webp";
import slot6 from "../../assets/images/slot6.webp";
import slot7 from "../../assets/images/slot7.webp";
import slot8 from "../../assets/images/slot8.webp";
import aviator1 from "../../assets/images/aviator1.webp";
import aviator2 from "../../assets/images/aviator2.webp";
import aviator3 from "../../assets/images/aviator3.webp";
import aviator4 from "../../assets/images/aviator5.webp";
import aviator6 from "../../assets/images/aviator6.webp";
import aviator7 from "../../assets/images/aviator7.webp";
import aviator8 from "../../assets/images/aviator8.webp";
import aviator9 from "../../assets/images/aviator9.webp";
import aviator10 from "../../assets/images/aviator10p.webp";
import aviator11 from "../../assets/images/aviator11.webp";
import aviator12 from "../../assets/images/aviator12.webp";
import aviator13 from "../../assets/images/aviator13.webp";

import mostbet1 from "../../assets/images/mostbet1.webp";
import mostbet2 from "../../assets/images/mostbet2.webp";
import mostbet3 from "../../assets/images/mostbet3.webp";
import mostbet4 from "../../assets/images/mostbet4.webp";
import mostbet5 from "../../assets/images/mostbet5.webp";
import mostbet6 from "../../assets/images/mostbet6.webp";
import mostbet7 from "../../assets/images/mostbet7.webp";
import mostbet8 from "../../assets/images/mostbet8.webp";
import mostbet9 from "../../assets/images/mostbet9.webp";
import mostbet10 from "../../assets/images/mostbet10.webp";
import mostbet11 from "../../assets/images/mostbet11.webp";
import mostbet12 from "../../assets/images/mostbet12.webp";
import mostbet13 from "../../assets/images/mostbet13.webp";
import mostbet14 from "../../assets/images/mostbet14.webp";

import recommended1 from "../../assets/images/recommended1.webp";
import recommended2 from "../../assets/images/recommended2.webp";
import recommended3 from "../../assets/images/recommended3.webp";
import recommended4 from "../../assets/images/recommended4.webp";
import recommended5 from "../../assets/images/recommended5.webp";
import recommended6 from "../../assets/images/recommended6.webp";
import recommended7 from "../../assets/images/recommended7.webp";
import recommended8 from "../../assets/images/recommended8.webp";
import recommended9 from "../../assets/images/recommended9.webp";
import recommended10 from "../../assets/images/recommended10.webp";
import recommended11 from "../../assets/images/recommended11.webp";
import recommended12 from "../../assets/images/recommended12.webp";
import recommended13 from "../../assets/images/recommended13.webp";
import recommended14 from "../../assets/images/recommended14.webp";
import promotionSlide1 from "../../assets/images/promotionSlide1.webp";
import promotionSlide2 from "../../assets/images/promotionSlide2.webp";
import promotionSlide3 from "../../assets/images/promotionSlide3.webp";


import newYear1 from "../../assets/images/newYear2.webp";
import newYear2 from "../../assets/images/newYear8.webp";
import newYear3 from "../../assets/images/newYear3.webp";
import newYear4 from "../../assets/images/newYear4.webp";
import newYear5 from "../../assets/images/newYear5.webp";
import newYear6 from "../../assets/images/newYear6.webp";
import newYear7 from "../../assets/images/newYear7.webp";

const Casino = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        document.body.style.backgroundColor = 'rgb(0, 35, 71)';

        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    const gamesSlots = [
        {
            img: slot1,
        },
        {
            img: slot2,
        },
        {
            img: slot3,
        },
        {
            img: slot4,
        },
        {
            img: slot5,
        },
        {
            img: slot6,
        },
        {
            img: slot7,
        },
        {
            img: slot8,
        },
    ]

    const gamesAviator = [
        {
            img:aviator1,
        },
        {
            img:aviator2,
        },
        {
            img:aviator3,
        },
        {
            img:aviator4,
        },
        {
            img:aviator6,
        },
        {
            img:aviator7,
        },
        {
            img:aviator8,
        },
        {
            img:aviator9,
        },
        {
            img:aviator10,
        },
        {
            img:aviator11,
        },
        {
            img:aviator12,
        },
        {
            img:aviator13,
        },
    ]

    const gamesMostBet = [
        {
            img:mostbet1,
        },
        {
            img:mostbet2,
        },
        {
            img:mostbet3,
        },
        {
            img:mostbet4,
        },
        {
            img:mostbet5,
        },
        {
            img:mostbet6,
        },
        {
            img:mostbet7,
        },
        {
            img:mostbet8,
        },
        {
            img:mostbet9,
        },
        {
            img:mostbet10,
        },
        {
            img:mostbet11,
        },
        {
            img:mostbet12,
        },
        {
            img:mostbet13,
        },
        {
            img:mostbet14,
        },
    ]

    const gamesRecommended = [
        {
            img:recommended1,
        },
        {
            img:recommended2,
        },
        {
            img:recommended3,
        },
        {
            img:recommended4,
        },
        {
            img:recommended5,
        },
        {
            img:recommended6,
        },
        {
            img:recommended7,
        },
        {
            img:recommended8,
        },
        {
            img:recommended9,
        },
        {
            img:recommended10,
        },
        {
            img:recommended11,
        },
        {
            img:recommended12,
        },
        {
            img:recommended13,
        },
        {
            img:recommended14,
        },
    ]

    const newYearList = [
        {
            img:newYear1,
        },
        {
            img:newYear2,
        },
        {
            img:newYear3,
        },
        {
            img:newYear4,
        },
        {
            img:newYear5,
        },
        {
            img:newYear6,
        },
        {
            img:newYear7,
        },

    ]


    return <div className='casino-section'>
        <div className='casino-slider-block'>

            <div className='casino-slider-body'>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    pagination={true}
                    modules={[Pagination]}

                >
                    <SwiperSlide>
                        <div className='casino-slider-item'>
                            <img src={casinoSlide1} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='casino-slider-item'>
                            <img src={casinoSlide2} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='casino-slider-item'>
                            <img src={casinoSlide3} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='casino-slider-item'>
                            <img src={casinoSlide4} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='casino-slider-item'>
                            <img src={casinoSlide5} alt=""/>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>

            <div className='winners-vertical-list'>
                <div className='winners-header G-align-center'>
                    <div className='winners-header-icon'>
                        <i className='icon icon-winners'></i>
                    </div>
                    <div className='winners-header-title'>
                        WIN
                        <span className='text-wrap'>RIGHT NOW</span>
                    </div>
                </div>
                <div className='winners-cnt'>
                    <Swiper className='winners-slider'
                            modules={[A11y, Autoplay]}
                            direction="vertical"
                            spaceBetween={10}
                            slidesPerView={7}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                    >
                        <SwiperSlide>
                            <div className='winners-item G-align-center'>
                                <div className='winners-item-image'></div>
                                <div className='winners-item-descr'>
                                    <div className='winners-item-header'>Canadian Wild</div>
                                    <div className='winners-item-tools G-align-center'>
                                        <p className='winners-item-name'>a...</p>
                                        <button className='title-amount'>10 576 451 so'm</button>
                                    </div>

                                    <div className='winners-sub-cnt'>
                                        <button className='winners-sub-bnt G-align-center'>
                                            <i className='icon icon-playStar'></i>
                                            <span>Play</span>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='winners-item G-align-center'>
                                <div className='winners-item-image'></div>
                                <div className='winners-item-descr'>
                                    <div className='winners-item-header'>Canadian Wild</div>
                                    <div className='winners-item-tools G-align-center'>
                                        <p className='winners-item-name'>a...</p>
                                        <button className='title-amount'>10 576 451 so'm</button>
                                    </div>

                                    <div className='winners-sub-cnt'>
                                        <button className='winners-sub-bnt G-align-center'>
                                            <i className='icon icon-playStar'></i>
                                            <span>Play</span>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='winners-item G-align-center'>
                                <div className='winners-item-image'></div>
                                <div className='winners-item-descr'>
                                    <div className='winners-item-header'>Canadian Wild</div>
                                    <div className='winners-item-tools G-align-center'>
                                        <p className='winners-item-name'>a...</p>
                                        <button className='title-amount'>10 576 451 so'm</button>
                                    </div>

                                    <div className='winners-sub-cnt'>
                                        <button className='winners-sub-bnt G-align-center'>
                                            <i className='icon icon-playStar'></i>
                                            <span>Play</span>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='winners-item G-align-center'>
                                <div className='winners-item-image'></div>
                                <div className='winners-item-descr'>
                                    <div className='winners-item-header'>Canadian Wild</div>
                                    <div className='winners-item-tools G-align-center'>
                                        <p className='winners-item-name'>a...</p>
                                        <button className='title-amount'>10 576 451 so'm</button>
                                    </div>

                                    <div className='winners-sub-cnt'>
                                        <button className='winners-sub-bnt G-align-center'>
                                            <i className='icon icon-playStar'></i>
                                            <span>Play</span>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='winners-item G-align-center'>
                                <div className='winners-item-image'></div>
                                <div className='winners-item-descr'>
                                    <div className='winners-item-header'>Canadian Wild</div>
                                    <div className='winners-item-tools G-align-center'>
                                        <p className='winners-item-name'>a...</p>
                                        <button className='title-amount'>10 576 451 so'm</button>
                                    </div>

                                    <div className='winners-sub-cnt'>
                                        <button className='winners-sub-bnt G-align-center'>
                                            <i className='icon icon-playStar'></i>
                                            <span>Play</span>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='winners-item G-align-center'>
                                <div className='winners-item-image'></div>
                                <div className='winners-item-descr'>
                                    <div className='winners-item-header'>Canadian Wild</div>
                                    <div className='winners-item-tools G-align-center'>
                                        <p className='winners-item-name'>a...</p>
                                        <button className='title-amount'>10 576 451 so'm</button>
                                    </div>

                                    <div className='winners-sub-cnt'>
                                        <button className='winners-sub-bnt G-align-center'>
                                            <i className='icon icon-playStar'></i>
                                            <span>Play</span>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </div>

        <div className='casino-lists '>
            <div className='container'>
                <div className='filters-block G-align-center'>
                    <div className='filter-title G-align-center'>
                        <i className='icon icon-filter1'></i>
                        <p>Games</p>
                    </div>

                    <div className='filter-item G-align-center'>
                        <p>Feature</p>
                        <i className='icon icon-arrow-down'></i>
                    </div>

                    <div className='filter-item G-align-center'>
                        <p>Genre</p>
                        <i className='icon icon-arrow-down'></i>
                    </div>
                    <div className='filter-item G-align-center'>
                        <p>Provider</p>
                        <i className='icon icon-arrow-down'></i>
                    </div>
                </div>

                <div className='casino-games-list G-flex-column'>

                    <CasinoGames gamesList={gamesSlots} slidesPerView={6} title={'TOP GAMES'} icon={lightningGold}/>

                    <CasinoGames gamesList={gamesAviator} slidesPerView={6} title={'CRASH GAMES'} icon={crash}/>

                    <CasinoGames gamesList={gamesMostBet} slidesPerView={6} title={'MOSTBET GAMES'} icon={mostbet}/>

                    <CasinoGames gamesList={gamesRecommended} slidesPerView={6} title={'WE RECOMMEND'} icon={recommend}/>

                    <div className='promotion-block'>
                        <div className='casino-games-header G-justify-between'>
                            <div className='games-header-info G-align-center'>
                                <div className='games-header-icon'>
                                    <img src={promotions} alt=""/>
                                </div>
                                <h2 className='games-header-title'>Promotions</h2>
                            </div>
                            <div className='games-slider-arrows G-align-center'>
                                <i onClick={() => swiperRef.current?.slidePrev()} className='icon icon-arrow-right'></i>
                                <i onClick={() => swiperRef.current?.slideNext()} className='icon icon-arrow-left'></i>
                            </div>

                        </div>


                        <div className='promotion-slider-body'>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={20}
                                loop={true}

                            >
                                <SwiperSlide>
                                    <div className='promotion-slider-item'>
                                        <img src={promotionSlide1} alt=""/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='promotion-slider-item'>
                                        <img src={promotionSlide2} alt=""/>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='promotion-slider-item'>
                                        <img src={promotionSlide3} alt=""/>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>

                    </div>

                    <CasinoGames gamesList={newYearList} slidesPerView={6} title={'New Year'} icon={newYear}/>

                    <div className='casino-all-games'>
                        <div className='casino-games-header G-justify-between'>
                            <div className='games-header-info G-align-center'>
                                <div className='games-header-icon'>
                                    <img src={allGames} alt=""/>
                                </div>
                                <h2 className='games-header-title'>All games</h2>
                            </div>
                            <div className='games-slider-arrows G-align-center'>
                                <i onClick={() => swiperRef.current?.slidePrev()} className='icon icon-arrow-right'></i>
                                <i onClick={() => swiperRef.current?.slideNext()} className='icon icon-arrow-left'></i>
                            </div>

                        </div>

                        <div className='all-games-list'>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={slot1} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={slot2} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={slot3} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={slot3} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={slot5} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={aviator1} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={aviator2} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={aviator3} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={aviator4} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={aviator6} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={aviator7} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={aviator8} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet2} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet3} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet4} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet5} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet6} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet7} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet7} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet8} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet9} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet10} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet10} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet11} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet12} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet13} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={mostbet14} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended1} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended2} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended3} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended4} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended5} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended6} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended7} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended8} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended9} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended10} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended11} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended12} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended13} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>
                            <div className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={recommended14} alt=""/>
                                </div>

                                <div className='game-item-sub'>
                                    <h3 className='game-sub-title'>Playson</h3>
                                    <div className='game-sub-play'>
                                        <img src={playicon} alt=""/>
                                    </div>
                                    <div className='game-sub-star'>
                                        <i className='icon icon-star-blue'></i>
                                    </div>
                                    <div className='game-sub-btn'>
                                        <button>Play for free</button>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>

        <div className='casino-left-side'>
            <div className='left-side-top-block'>
                <div className='promotion-banner'>
                    <div className='promotion-banner-img'>
                        <img src={promotionBanner} alt=""/>
                    </div>
                    <div className='promotion-btn G-center'>
                        <button>Tournaments</button>
                    </div>
                </div>

                <nav className='promotion-menu'>
                    <ul className='promotion-menu-list'>
                        <li className='promotion-menu-item'>
                            <Link className='promotion-menu-link G-align-center' to={'/'}>
                                <i className='icon menu-icon'></i>
                                <span>Popular</span>
                            </Link>
                        </li>
                        <li className='promotion-menu-item'>
                            <Link className='promotion-menu-link G-align-center' to={'/'}>
                                <i className='icon menu-icon2'></i>
                                <span>New</span>
                            </Link>
                        </li>
                        <li className='promotion-menu-item'>
                            <Link className='promotion-menu-link G-align-center' to={'/'}>
                                <i className='icon menu-icon3'></i>
                                <span>Featured</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className='promotion-search'>
                    <label className='promotion-search-label'>
                        <i className='icon promotion-search-icon icon-search'></i>
                        <input type="search" placeholder={'Search....'}/>
                    </label>
                </div>

                <nav className='genres-menu'>
                    <ul className='genres-menu-list'>
                        <li className='genres-menu-item'>
                            <Link className='genres-menu-link G-align-center' to={'/'}>
                                <i className='icon genres-menu-icon icon-slots'></i>
                                <span>Slots</span>
                            </Link>
                        </li>
                        <li className='genres-menu-item'>
                            <Link className='genres-menu-link G-align-center' to={'/'}>
                                <i className='icon genres-menu-icon icon-roulette'></i>
                                <span>Roulette</span>
                            </Link>
                        </li>
                        <li className='genres-menu-item'>
                            <Link className='genres-menu-link G-align-center' to={'/'}>
                                <i className='icon genres-menu-icon icon-cards'></i>
                                <span>Cards</span>
                            </Link>
                        </li>
                        <li className='genres-menu-item'>
                            <Link className='genres-menu-link G-align-center' to={'/'}>
                                <i className='icon genres-menu-icon icon-lotteries'></i>
                                <span>Lotteries</span>
                            </Link>
                        </li>

                        <li className='genres-menu-item'>
                            <Link className='genres-menu-link G-align-center' to={'/'}>
                                <i className='icon genres-menu-icon icon-jackpots'></i>
                                <span>Jackpots</span>
                            </Link>
                        </li>

                        <li className='genres-menu-item'>
                            <Link className='genres-menu-link G-align-center' to={'/'}>
                                <i className='icon  icon-fast-games'></i>
                                <span>Fast games</span>
                            </Link>
                        </li>

                        <li className='genres-menu-item'>
                            <Link className='genres-menu-link G-align-center' to={'/'}>
                                <i className='icon  icon-virtual-sport'></i>
                                <span>Virtual sport</span>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
            <div className='left-side-bottom-block'></div>
        </div>


    </div>
};

export default Casino;