import './GreetingsBlock.scss';
import React from 'react';

interface GreetingsBlockProps {
    currentLanguage: string
}

const GreetingsBlock: React.FC<GreetingsBlockProps> = ({ currentLanguage }) => {
    
    let date = new Date();
    // let weekDay = date.getDay();
    let weekDay: string;
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let timeOfDay = '';
    let greetingsWords = '';

    if (hours >= 5 && hours <= 11) {
        if (currentLanguage === 'en') {
            timeOfDay = 'morning';
        } else {
            timeOfDay = 'утро';
            greetingsWords = 'Доброе';
        }
    } else if (hours > 11 && hours <= 17) {
        if (currentLanguage === 'en') {
            timeOfDay = 'afternoon';
        } else {
            timeOfDay = 'день'
            greetingsWords = 'Добрый';
        }
    } else if (hours > 17 && hours <= 22) {
        if (currentLanguage === 'en') {
            timeOfDay = 'evening';
        } else {
            timeOfDay = 'вечер'
            greetingsWords = 'Добрый';
        }
    } else if (hours === 23 || hours === 0 || hours === 1 || hours === 2 || hours === 3 || hours === 4) {
        if (currentLanguage === 'en') {
            timeOfDay = 'night';
        } else {
            timeOfDay = 'ночь'
            greetingsWords = 'Доброй';
        }
    }

    switch (day) {
        case 0:
            currentLanguage === 'en' ? weekDay = 'Sunday' : weekDay = 'Воскресенье';
            break;
        case 1:
            currentLanguage === 'en' ? weekDay = 'Monday' : weekDay = 'Понедельник';
            break;
        case 2:
            currentLanguage === 'en' ? weekDay = 'Tuesday' : weekDay = 'Вторник';
            break;
        case 3:
            currentLanguage === 'en' ? weekDay = 'Wednesday' : weekDay = 'Среда';
            break;
        case 4:
            currentLanguage === 'en' ? weekDay = 'Thursday' : weekDay = 'Четверг';
            break;
        case 5:
            currentLanguage === 'en' ? weekDay = 'Friday' : weekDay = 'Пятница';
            break;
        case 6:
            currentLanguage === 'en' ? weekDay = 'Saturday' : weekDay = 'Суббота';
            break;
        default:
            weekDay = ''
            break;
    }

    return (
        <div className="greetingsBlock">
            <h1>{currentLanguage === 'en'
                ? 'Good'
                : greetingsWords} {timeOfDay}, {currentLanguage === 'en' ? 'User' : 'Пользователь'}!
            </h1>
            <div className='greetingsBlock__weekDay'>{weekDay}</div>
            <div className='greetingsBlock__date'>{day}/{month + 1}/{year}</div>
        </div>
    )
}

export default GreetingsBlock;