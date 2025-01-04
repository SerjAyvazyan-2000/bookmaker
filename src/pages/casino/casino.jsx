import React, {useEffect, useRef} from 'react';
import './casino.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Autoplay} from "swiper/modules";
import smail from '../../assets/icons/smail.svg'
import lightningGold from '../../assets/icons/lightningGold.svg'
import crash from '../../assets/images/CRASH.svg'
import mostbet from '../../assets/images/MOSTBET.svg'
import recommend from '../../assets/images/RECOMMEND.svg'
import newYear from '../../assets/images/newYear.svg'
import allGames from '../../assets/images/allGames.svg'
import promotionBanner from '../../assets/images/promotionBanner.svg'
import menuIcon3 from '../../assets/images/menuIcon3.svg'

import CasinoGames from "../../components/casinoGames/casinoGames";
import gameitem from "../../assets/icons/gameitem.webp";
import gamesitemText from "../../assets/icons/gamesitemText.svg";
import playicon from "../../assets/images/play.svg";
import {Link} from "react-router-dom";


const Casino = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        document.body.style.backgroundColor = 'rgb(0, 35, 71)';

        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    return <div className='casino-section'>
        <div className='casino-slider-block'>
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
                    <CasinoGames slidesPerView={6} title={'For you'} icon={smail}/>

                    <CasinoGames slidesPerView={6} title={'TOP GAMES'} icon={lightningGold}/>

                    <CasinoGames slidesPerView={6} title={'CRASH GAMES'} icon={crash}/>

                    <CasinoGames slidesPerView={6} title={'MOSTBET GAMES'} icon={mostbet}/>

                    <CasinoGames slidesPerView={6} title={'WE RECOMMEND'} icon={recommend}/>

                    <CasinoGames slidesPerView={6} title={'New Year'} icon={newYear}/>

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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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

                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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

                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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
                            <div style={{backgroundImage: `url(${gameitem})`}}
                                 className='games-item G-image  G-center'>
                                <div className='games-item-text'>
                                    <img src={gamesitemText} alt=""/>
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