import React, {useState} from 'react';
import './replenish.scss'
import starRed from '../../assets/icons/starRed.svg'
import paymentIcon from '../../assets/images/paymentIcon.svg'
import paymentIcon2 from '../../assets/images/paymentIcon2.svg'
import paymentIcon3 from '../../assets/images/paymentIcon3.svg'
import paymentIcon4 from '../../assets/images/paymentIcon4.svg'
import paymentIcon5 from '../../assets/images/paymentIcon5.svg'
import paymentIcon6 from '../../assets/images/paymentIcon6.svg'
import paymentIcon7 from '../../assets/images/paymentIcon7.svg'
import paymentIcon8 from '../../assets/images/paymentIcon8.svg'
import paymentIcon9 from '../../assets/images/paymentIcon9.svg'
import paymentIcon10 from '../../assets/images/paymentIcon10.svg'
import paymentIcon11 from '../../assets/images/paymentIcon11.svg'
import paymentIcon12 from '../../assets/images/paymentIcon12.svg'
import paymentIcon13 from '../../assets/images/paymentIcon13.svg'
import paymentIcon14 from '../../assets/images/paymentIcon14.svg'
import paymentIcon15 from '../../assets/images/paymentIcon15.svg'
import paymentIcon16 from '../../assets/images/paymentIcon16.svg'
import paymentIcon17 from '../../assets/images/paymentIcon17.svg'
import paymentIcon18 from '../../assets/images/paymentIcon18.svg'
import paymentIcon19 from '../../assets/images/paymentIcon19.svg'
import paymentIcon20 from '../../assets/images/paymentIcon20.svg'
import paymentIcon21 from '../../assets/images/paymentIcon21.svg'
import paymentIcon22 from '../../assets/images/paymentIcon22.svg'
import paymentIcon23 from '../../assets/images/paymentIcon23.svg'
import paymentIcon24 from '../../assets/images/paymentIcon24.svg'
import paymentIcon25 from '../../assets/images/paymentIcon25.svg'
import paymentIcon26 from '../../assets/images/paymentIcon26.svg'
import paymentIcon27 from '../../assets/images/paymentIcon27.svg'
import paymentIcon28 from '../../assets/images/paymentIcon28.svg'
import paymentIcon29 from '../../assets/images/paymentIcon29.svg'
import paymentIcon30 from '../../assets/images/paymentIcon30.svg'
import arrowRigth from '../../assets/images/arrowRigth.svg'
import qr from '../../assets/images/qr.svg'
import faq from '../../assets/images/faq.svg'
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";


const Replenish = () => {

    const [inputValue, setInputValue] = useState('100 000');
    const [activeButton, setActiveButton] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState("BEP20");
    const amounts = ['100 000', '125 000', '200 000', '300 000'];
    const [activeIndex, setActiveIndex] = useState(1);
    const [showPaymentMethod, setShowPaymentMethod] = useState(false);
    const [activeUsdt, setActiveUsdt] = useState(false);


    const handleButtonClick = (value, index) => {
        setInputValue(value);
        setActiveButton(index);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleUsdtClick = () => {
        setActiveUsdt(true);
    };

    const handleRechargeClick = () => {
        setShowPaymentMethod(!showPaymentMethod);

    };


    const toggleSelectBlock = () => {
        setIsActive((prevState) => !prevState);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsActive(false);
    };
    const bonusPackets = [
        {id: 1, title: "100% + 50FS", description: "When replenishing from"},
        {id: 2, title: "100% + 50FS", description: "When replenishing from"},
        {id: 3, title: "100% + 50FS", description: "When replenishing from"},
        {id: 4, title: "100% + 50FS", description: "When replenishing from"},
    ];

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return <div className='replenish-page'>
        <div className='replenish-hero-section'></div>

        <div className='replenish-main-cnt '>
            <div className='container'>
                <div className='replenish-main-body G-flex'>

                    <div className='replenish-left-wrapper'>
                        <div className='replenish-left-side'>
                            <div className='left-side-header '>
                                <div className='left-side-title G-align-center'>
                                    <i className='icon icon-user'></i>
                                    <p>ayvazyanserj3@gmail.com</p>
                                </div>
                                <div className='left-side-clue G-align-center'>
                                    <div className='side-clue-icon'>
                                        <img src={starRed} alt=""/>
                                    </div>
                                    <p>to bets</p>
                                </div>

                            </div>
                            <nav className='user-nav-menu'>
                                <ul className='user-menu-list'>
                                    <li className='menu-item-balance G-align-center'>
                                        <i className='icon icon-selection'></i>
                                        <div className='item-balance-texts'>
                                            <p>balance</p>
                                            <span>0,00 so'm</span>
                                        </div>
                                        <div className='item-balance-icon'>
                                            <i className='icon icon-balance'></i>

                                        </div>
                                    </li>
                                    <li className='user-menu-item'>
                                        <Link className='user-menu-link G-align-center' to={'/'}>
                                            <i className='icon user-menu-icon icon-settings'></i>
                                            <span>My status</span>
                                        </Link>
                                    </li>
                                    <li className='user-menu-item'>
                                        <Link className='user-menu-link G-align-center' to={'/'}>
                                            <i className='icon user-menu-icon icon-menu-user'></i>
                                            <span>Personal data</span>
                                        </Link>
                                    </li>
                                    <li className='user-menu-item'>
                                        <Link className='user-menu-link G-align-center' to={'/'}>
                                            <i className='icon user-menu-icon icon-menu-balance'></i>
                                            <span>Top up your account</span>
                                        </Link>
                                    </li>
                                    <li className='user-menu-item'>
                                        <Link className='user-menu-link G-align-center' to={'/'}>
                                            <i className='icon user-menu-icon icon-withdraw'></i>
                                            <span>Withdraw from account</span>
                                        </Link>
                                    </li>
                                    <li className='user-menu-item'>
                                        <Link className='user-menu-link G-align-center' to={'/'}>
                                            <i className='icon user-menu-icon icon-clock'></i>
                                            <span>Betting history</span>
                                        </Link>
                                    </li>
                                    <li className='user-menu-item'>
                                        <Link className='user-menu-link G-align-center' to={'/'}>
                                            <i className='icon user-menu-icon icon-settings'></i>
                                            <span>Settings</span>
                                        </Link>
                                    </li>
                                    <li className='user-menu-item'>
                                        <Link className='user-menu-link G-align-center' to={'/'}>
                                            <i className='icon user-menu-icon icon-invite'></i>
                                            <span>Invite friends</span>
                                        </Link>
                                    </li>
                                    <li className='user-menu-item'>
                                        <Link className='user-menu-link G-align-center' to={'/'}>
                                            <i className='icon user-menu-icon icon-log-out'></i>
                                            <span>Log out</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className='replenish-cnt'>
                        <h2 className='replenish-cnt-title'>Top up account 218116121</h2>
                        <p className='replenish-sub-title'>Select the payment system through which you want to top up
                            your
                            account</p>
                        <div className='replenish-payment-box'>
                            <div className='replenish-payment-header'>
                                <h3 className='replenish-payment-title'>AVAILABLE PAYMENT METHODS</h3>
                            </div>

                            <div className='replenish-payment-list G-align-center'>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon2} alt=""/>
                                </div>

                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon3} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon4} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img className='replenish-payment-img' src={paymentIcon5} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img className='replenish-payment-img' src={paymentIcon6} alt=""/>
                                </div>

                                <div className='replenish-payment-item'>
                                    <img className='replenish-payment-img' src={paymentIcon5} alt=""/>
                                </div>

                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon7} alt=""/>
                                </div>

                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon8} alt=""/>
                                </div>

                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon9} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon10} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon11} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon12} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon13} alt=""/>
                                </div>
                                <div onClick={handleUsdtClick}
                                     className={`replenish-usdt replenish-payment-item ${activeUsdt ? 'active' : ''}`}
                                >
                                    <img src={paymentIcon14} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon15} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon16} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img className='replenish-payment-img' src={paymentIcon17} alt=""/>
                                </div>

                                <div className='replenish-payment-item'>
                                    <img className='replenish-payment-img' src={paymentIcon18} alt=""/>
                                </div>

                                <div className='replenish-payment-item'>
                                    <img className='replenish-payment-img' src={paymentIcon19} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon20} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon21} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon22} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon23} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon24} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon25} alt=""/>
                                </div>
                                <div className='replenish-payment-item '>
                                    <img src={paymentIcon26} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon27} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon28} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon29} alt=""/>
                                </div>
                                <div className='replenish-payment-item'>
                                    <img src={paymentIcon30} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="replenish-tolls-wrapper">
                        {!showPaymentMethod && !activeUsdt && (
                            <div className='replenish-tolls'>
                                <div className='replenish-tolls-header'>
                                    <div className='replenish-payment-header'>
                                        <h3 className='replenish-payment-title'>Top up USDT</h3>
                                    </div>


                                </div>
                                <div className='replenish-tolls-cnt'>
                                    <div className='tolls-info'>
                                        <div className='balance-refill'>
                                            <h3>If you have problems with replenishment, try another Humo card</h3>
                                            <div className='tolls-info-clue G-justify-between'>
                                                <div className='limits-amount G-align-center'>
                                                    <p className='limits-amount_text'>Limits</p>
                                                    <span className='limits-amount_number'>10000 - 660000000</span>
                                                </div>
                                                <Link to={'/'} className='tolls-faq G-align-center'>
                                                    <p>FAQ</p>
                                                    <div className='tolls-faq-icon G-center'>
                                                        <img src={faq} alt=""/>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className='replenish-input-block'>
                                                <label className='replenish-label'>
                                                    <input onChange={handleInputChange} value={inputValue}
                                                           type="text"/>
                                                </label>

                                                <div className='amount-tooltips G-center'>
                                                    {amounts.map((amount, index) => (
                                                        <button
                                                            key={index}
                                                            className={activeButton === index ? 'active' : ''} // Добавляем класс активной кнопке
                                                            onClick={() => handleButtonClick(amount, index)}
                                                        >
                                                            {amount}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className='replenish-btn'>
                                                <button>Recharge</button>
                                            </div>
                                        </div>

                                        <div className='balance-after-refill'>
                                            <div className='after-refill-info G-justify-between'>
                                                <span>Баланс после пополнения:</span>
                                                <p> 250 000.00</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='replenish-slider-cards'>
                                        <Swiper className='replenish-slider'
                                                spaceBetween={20}
                                                slidesPerView={2.5}
                                                onSlideChange={() => console.log('slide change')}
                                                onSwiper={(swiper) => console.log(swiper)}
                                        >
                                            <SwiperSlide>
                                                <div className='bonus-packet'>
                                                    <div className='bonus-packet_text'>
                                                        <h3 className='bonus-packet_title'> 100% + 50FS</h3>
                                                        <p className='bonus-packet_descr'>When replenishing from</p>
                                                    </div>
                                                    <i className='icon icon-bonusPacket'></i>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='bonus-packet'>
                                                    <div className='bonus-packet_text'>
                                                        <h3 className='bonus-packet_title'> 100% + 50FS</h3>
                                                        <p className='bonus-packet_descr'>When replenishing from</p>
                                                    </div>
                                                    <i className='icon icon-bonusPacket'></i>
                                                    <div className='bonus-packet_status'>Bonus selected</div>
                                                </div>

                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='bonus-packet'>
                                                    <div className='bonus-packet_text'>
                                                        <h3 className='bonus-packet_title'> 100% + 50FS</h3>
                                                        <p className='bonus-packet_descr'>When replenishing from</p>
                                                    </div>
                                                    <i className='icon icon-bonusPacket'></i>
                                                </div>

                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='bonus-packet'>
                                                    <div className='bonus-packet_text'>
                                                        <h3 className='bonus-packet_title'> 100% + 50FS</h3>
                                                        <p className='bonus-packet_descr'>When replenishing from</p>
                                                    </div>
                                                    <i className='icon icon-bonusPacket'></i>
                                                </div>

                                            </SwiperSlide>
                                        </Swiper>
                                    </div>


                                </div>
                            </div>

                        )}
                        {!showPaymentMethod && activeUsdt && (
                            <div className="replenish-usdt-block">
                                <div className='replenish-tolls'>
                                    <div className='replenish-tolls-header'>
                                        <div className='replenish-payment-header'>
                                            <h3 className='replenish-payment-title'>Top up USDT</h3>
                                        </div>

                                    </div>
                                    <div className='replenish-tolls-cnt'>
                                        <div className='tolls-info'>
                                            <div className='balance-refill'>
                                                <div className='usdt-tolls-faq G-justify-end'>
                                                    <Link to={'/'} className='tolls-faq G-align-center'>
                                                        <p>FAQ</p>
                                                        <div className='tolls-faq-icon G-center'>
                                                            <img src={faq} alt=""/>
                                                        </div>
                                                    </Link>
                                                </div>

                                                <div className='tolls-info-clue G-justify-between'>
                                                    <div className='limits-amount G-align-center'>
                                                        <p className='limits-amount_text'>Crypto wallet type</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`replenish-select-block ${isActive ? "active" : ""}`}
                                                    onClick={toggleSelectBlock}
                                                >
                                                    <div className='replenish-select-header G-justify-between'>
                                                        <p className="replenish-select-title">{selectedOption}</p>
                                                        <i className='icon icon-arrow-down-gray'></i>
                                                    </div>
                                                    <div className='replenish-select-sub G-flex-column'>
                                                        <div
                                                            className='replenish-select-option'
                                                            onClick={(e) => {
                                                                handleOptionClick("BEP20");
                                                            }}
                                                        >BEP20
                                                        </div>
                                                        <div
                                                            className='replenish-select-option'
                                                            onClick={(e) => {
                                                                handleOptionClick("ERC20");
                                                            }}
                                                        >ERC20
                                                        </div>
                                                        <div className='replenish-select-option'
                                                             onClick={(e) => {
                                                                 handleOptionClick("TRC20");
                                                             }}
                                                        >TRC20
                                                        </div>
                                                    </div>


                                                </div>

                                                <div onClick={handleRechargeClick} className='replenish-btn'>
                                                    <button>Recharge</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='replenish-slider-cards'>
                                            <Swiper
                                                className='replenish-slider'
                                                spaceBetween={20}
                                                slidesPerView={2.5}
                                            >

                                                {bonusPackets.map((packet, index) => (
                                                    <SwiperSlide key={packet.id}>
                                                        <div
                                                            className={`bonus-packet ${activeIndex === index ? "active" : ""}`}
                                                            onClick={() => handleClick(index)}
                                                        >
                                                            <div className="bonus-packet_text">
                                                                <h3 className="bonus-packet_title">{packet.title}</h3>
                                                                <p className="bonus-packet_descr">{packet.description}</p>
                                                            </div>
                                                            <i className="icon icon-bonusPacket"></i>
                                                            {activeIndex === index && (
                                                                <div className="bonus-packet_status">Bonus
                                                                    selected</div>
                                                            )}
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        )}


                        {showPaymentMethod && (
                            <div className="payment-method-usdt">
                                <div className='replenish-tolls'>
                                    <div className='replenish-tolls-header'>
                                        <div className='replenish-payment-header G-justify-between'>
                                            <h3 className='replenish-payment-title'>Top up USDT</h3>
                                            <div onClick={handleRechargeClick} className='replenish-back-icon'>
                                                <img src={arrowRigth} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='replenish-usdt-qr G-center'>
                                        <div className='replenish-qr-img'>
                                            <img src={qr} alt=""/>
                                        </div>
                                    </div>
                                    <div className='replenish-qr-info G-flex-column'>
                                        <div className='qr-info-item G-justify-between'>
                                            <p>Wallet</p>
                                            <p>0xD85E324917f210c56A1E962F9b4ec56993d47a31</p>
                                        </div>
                                        <div className='qr-info-item G-justify-between'>
                                            <p>Validity period</p>
                                            <p>04.01.2025 20:22</p>
                                        </div>
                                        <div className='qr-info-item G-justify-between'>
                                            <p>Exchange rate</p>
                                            <p>1 USDT ({selectedOption}) = 13139.22 UZS</p>
                                        </div>
                                        <div className='qr-info-item G-justify-between'>
                                            <p>Minimum amount</p>
                                            <p>2.262300 USDT (BEP20)</p>
                                        </div>

                                    </div>
                                    <div className='confirm-cnt'>
                                        <Link target={'_blank'} to={'/confirm'}>
                                            Confirm
                                        </Link>
                                    </div>

                                </div>

                            </div>
                        )}



                    </div>

                </div>
            </div>


        </div>


    </div>
};

export default Replenish;
