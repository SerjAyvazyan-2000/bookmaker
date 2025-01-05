import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import slot1 from "../../assets/images/slot1.webp";
import slot2 from "../../assets/images/slot2.webp";
import slot3 from "../../assets/images/slot3.webp";
import slot4 from "../../assets/images/slot4.webp";
import slot5 from "../../assets/images/slot5.webp";

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
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                    1920: {
                        slidesPerView: slidesPerView,
                    },
                }}

            >
                <SwiperSlide>
                    <div
                         className='games-item G-image  G-center'>
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
                </SwiperSlide>

                <SwiperSlide>
                    <div
                         className='games-item G-image  G-center'>
                        <div className='games-item-text'>
                            <img src={slot2} alt=""/>
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
                    <div
                         className='games-item G-image  G-center'>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div
                         className='games-item G-image  G-center'>
                        <div className='games-item-text'>
                            <img src={slot4} alt=""/>
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
                    <div
                         className='games-item G-image  G-center'>
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
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className='games-item G-image  G-center'>
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
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className='games-item G-image  G-center'>
                        <div className='games-item-text'>
                            <img src={slot2} alt=""/>
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
                    <div
                        className='games-item G-image  G-center'>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='games-item G-image  G-center'>
                        <div className='games-item-text'>
                            <img src={slot4} alt=""/>
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
                    <div
                        className='games-item G-image  G-center'>
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
                </SwiperSlide>
            </Swiper>

        </div>
    </div>

};

export default CasinoGames;