import React from 'react';
import './properties.scss'
import PropertiesTopItem from "../propertiesItem/propertiesTopItem";
import PropertiesLiveItem from "../propertiesItem/propertiesLiveItem";


const Properties = () => {


    const propertiesLive = [
        {
            country: 'Фулад Хузестан',
            league: 'Премьер-Лига',
            matchTime: '46\'',
            half: 'Перерыв',

            team1: 'Фулад Хузестан',
            team2: 'Малаван',
            account1: 1,
            account2: 2,
            coefficients: {
                P1: 1.25,
                X: 4.9,
                P2: 13,
                B: 2.65,
                total: 2.5,
                M: 1.42,
                F1: -1.5,
                handicap: 1.25,
                F2: 1.42
            }
        }
    ];

    const propertiesTop = [
        {
            country: 'Испания',
            league: 'Кубок. 1/16 финала',
            matchTime: '16:00',
            dataStart: '19:00',
            dataEnd: '04.01',
            team1: 'Валенсия',
            team2: 'Реал Мадрид',

            coefficients: {
                P1: 1.3,
                X: 6,
                P2: 8,
                B: 1.88,
                total: 3.5,
                M: 1.93,
                F1: -1.5,
                handicap: 1.25,
                F2: 1.8
            }
        },
        {
            country: 'Клубы',
            league: 'Альпийская лига',
            matchTime: '16:00',
            dataStart: '19:00',
            dataEnd: '04.01',
            team1: 'Валенсия',
            team2: 'Реал Мадрид',

            coefficients: {
                P1: 1.3,
                X: 6,
                P2: 8,
                B: 1.88,
                total: 3.5,
                M: 1.93,
                F1: -1.5,
                handicap: 1.25,
                F2: 1.8
            }
        },

        {
            country: 'Испания',
            league: 'Кубок. 1/16 финала',
            matchTime: '16:00',
            dataStart: '19:00',
            dataEnd: '04.01',
            team1: 'Валенсия',
            team2: 'Реал Мадрид',

            coefficients: {
                P1: 1.3,
                X: 6,
                P2: 8,
                B: 1.88,
                total: 3.5,
                M: 1.93,
                F1: -1.5,
                handicap: 1.25,
                F2: 1.8
            }
        },
        {
            country: 'Клубы',
            league: 'Альпийская лига',
            matchTime: '16:00',
            dataStart: '19:00',
            dataEnd: '04.01',
            team1: 'Валенсия',
            team2: 'Реал Мадрид',

            coefficients: {
                P1: 1.3,
                X: 6,
                P2: 8,
                B: 1.88,
                total: 3.5,
                M: 1.93,
                F1: -1.5,
                handicap: 1.25,
                F2: 1.8
            }
        },
    ];
    return <div className='properties-list G-flex-column'>
        {propertiesLive.map((item, index) => {
            return <PropertiesLiveItem item={item} key={index}/>
        })}
        {propertiesTop.map((item, index) => {
            return <PropertiesTopItem item={item} key={index}/>
        })}


    </div>
};

export default Properties;