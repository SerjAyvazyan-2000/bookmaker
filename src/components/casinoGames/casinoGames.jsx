import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import gameitem from "../../assets/icons/gameitem.webp";
import gamesitemText from "../../assets/icons/gamesitemText.svg";
import playicon from "../../assets/images/play.svg";

const CasinoGames = ({title,icon,slidesPerView}) => {
    const swiperRef = useRef(null);


    return <div className='casino-games-block'>
        <div className='casino-games-header G-justify-between'>
            <div className='games-header-info G-align-center'>
                <div className='games-header-icon'>
                    <img src={icon} alt=""/>
                </div>
                <h2 className='games-header-title'>{title}</h2>
            </div>
            <div className='games-slider-arrows G-align-center'>
                <i onClick={() => swiperRef.current?.slidePrev()} className='icon icon-arrow-right'></i>
                <i onClick={() => swiperRef.current?.slideNext()} className='icon icon-arrow-left'></i>
            </div>

        </div>
        <div className='casino-games-cnt'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={slidesPerView}
                navigation
                onSwiper={(swiper) => (swiperRef.current = swiper)}

            >
                <SwiperSlide>
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
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{backgroundImage: `url(${gameitem})`}}
                         className='games-item G-image  G-center'>
                        <div className='games-item-text'>
                            <img src={gamesitemText} alt=""/>
                        </div>
                        <div className='game-icon-clue icon-clue-red'>
                            <i className='icon icon-lightning'></i>
                        </div>
                        <div className='game-icon-clue icon-clue-blue'>
                            <i className='icon icon-cup'></i>
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
                </SwiperSlide>

                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{backgroundImage: `url(${gameitem})`}}
                         className='games-item G-image  G-center'>
                        <div className='games-item-text'>
                            <img src={gamesitemText} alt=""/>
                        </div>
                        <div className='game-icon-clue icon-clue-red'>
                            <i className='icon icon-lightning'></i>
                        </div>
                        <div className='game-icon-clue icon-clue-blue'>
                            <i className='icon icon-cup'></i>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{backgroundImage: `url(${gameitem})`}}
                         className='games-item G-image  G-center'>
                        <div className='games-item-text'>
                            <img src={gamesitemText} alt=""/>
                        </div>
                        <div className='game-icon-clue icon-clue-red'>
                            <i className='icon icon-lightning'></i>
                        </div>
                        <div className='game-icon-clue icon-clue-blue'>
                            <i className='icon icon-cup'></i>
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
                </SwiperSlide>

                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{backgroundImage: `url(${gameitem})`}}
                         className='games-item G-image  G-center'>
                        <div className='games-item-text'>
                            <img src={gamesitemText} alt=""/>
                        </div>
                        <div className='game-icon-clue icon-clue-red'>
                            <i className='icon icon-lightning'></i>
                        </div>
                        <div className='game-icon-clue icon-clue-blue'>
                            <i className='icon icon-cup'></i>
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
                </SwiperSlide>
            </Swiper>

        </div>
    </div>

};

export default CasinoGames;