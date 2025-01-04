import React from 'react';
import './propertiesItem.scss'

const PropertiesLiveItem = ({item}) => {
    return <div className='properties-item '>
        <div className='ines_group-table'>
            <div className='center_line_header G-align-center'>
                <div className='linesGroup_sideWrapper'>
                    <h2 className="auto_center_line_title G-align-center">
                        <button className="linesGroup_title" type="button">{item.country}</button>
                        <button className="linesGroup_title" type="button">{item.league}</button>
                    </h2>
                </div>
                <div className='linesGroup_score G-align-center'>
                    <div className="linesGroup_score ">
                        <i className='icon icon-star'></i>
                    </div>

                    <div className="linesGroup_score ">P1</div>
                    <div className="linesGroup_score ">X</div>
                    <div className="linesGroup_score ">P2</div>
                    <div className="linesGroup_score ">B</div>
                    <div className="linesGroup_score ">total</div>
                    <div className="linesGroup_score ">M</div>
                    <div className="linesGroup_score ">1</div>
                    <div className="linesGroup_score ">handicap</div>
                    <div className="linesGroup_score ">2</div>
                    <div className="linesGroup_score ">
                        <i className='icon icon-arrow-down-gray'></i>
                    </div>
                </div>
            </div>

            <div className='center_live_body G-align-center'>
                <button type="button" className="favorite-button  ">
                    <i className='icon icon-star'></i>
                </button>
                <div className="defaultLine_lineLinks G-align-center">
                    <div className="match-live-wrap">
                        <span>{item.matchTime}</span>
                        <p>{item.half}</p>
                    </div>
                    <div className="auto_center_line_team ">
                        <p>Валенсия</p>
                        <p>Реал Мадрид</p>
                    </div>

                    <div className='center_line-live_cnt G-flex'>

                        <div className='cell-numbers G-flex-column'>
                            <span className="number_odd">{item.account1}</span>
                            <span className="number_odd">{item.account2}</span>
                        </div>

                        <div className="defaultLine_cell  G-align-center">

                            <i className='icon icon-experience'></i>
                        </div>
                        <div className="defaultLine_cell">
                            <button className="defaultLine_outcome">
                                <span className="outcomeItem_odd-blue">{item.coefficients.X}</span>
                            </button>
                        </div>
                        <div className="defaultLine_cell">
                            <button className="defaultLine_outcome">
                                <span className="outcomeItem_odd-blue">{item.coefficients.X}</span>
                            </button>
                        </div>
                        <div className="defaultLine_cell">
                            <button className="defaultLine_outcome ">
                                <span className="outcomeItem_odd-blue">{item.coefficients.P2}</span>
                            </button>
                        </div>
                        <div className="defaultLine_cell">
                            <button
                                className="defaultLine_outcome  "><span
                                className="outcomeItem_odd-blue">{item.coefficients.B}</span></button>
                        </div>
                        <div className="defaultLine_cell">
                            <div className="defaultLine_indicators">
                                <div className="outcomeItem_odd-blue">{item.coefficients.total}</div>
                            </div>
                        </div>
                        <div className="defaultLine_cell">
                            <button type="button" className="defaultLine_outcome ">
                                <span className="outcomeItem_odd-black">{item.coefficients.M}</span>
                            </button>
                        </div>
                        <div className="defaultLine_cell">
                            <button className="defaultLine_outcome">
                                <span className="outcomeItem_odd-blue">{item.coefficients.F1}</span>
                            </button>
                        </div>
                        <div className="defaultLine_cell">
                            <button className="defaultLine_outcome ">
                                <span className="outcomeItem_odd-black">{item.coefficients.handicap}</span>
                            </button>
                        </div>
                        <div className="defaultLine_cell">
                            <button
                                className="defaultLine_outcome  "><span
                                className="outcomeItem_odd-black">{item.coefficients.F2}</span></button>
                        </div>
                        <div className="defaultLine_cell"></div>
                    </div>

                </div>
            </div>
        </div>


    </div>
};

export default PropertiesLiveItem;