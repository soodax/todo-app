import './Menu.scss';
import userAvatar from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import React from 'react';

interface MenuProps {
    currentLanguage: string
    darkMode: boolean
}

const Menu: React.FC<MenuProps> = ({
    currentLanguage,
    darkMode
}) => {

    return (
        <nav className={!darkMode ? 'menu' : 'menu menu-dark'}>
            <a className='menu__avatar' href="#"><img src={userAvatar} alt=""/></a>
            <ul>
                <NavLink className={({ isActive }) => !darkMode 
                    ? isActive ? 'menu__link menu__link-active' : 'menu__link' 
                    : isActive ? 'menu__link menu__link-active' : 'menu__link menu__link-dark'} to={'/home'}>
                    {currentLanguage === 'en' ? 'Home' : 'Главная'}
                </NavLink>
                <NavLink className={({ isActive }) => !darkMode 
                    ? isActive ? 'menu__link menu__link-active' : 'menu__link' 
                    : isActive ? 'menu__link menu__link-active' : 'menu__link menu__link-dark'} to={'/stats'}>
                    {currentLanguage === 'en' ? 'Stats' : 'Статистика'}
                </NavLink>
                <NavLink className={({ isActive }) => !darkMode 
                    ? isActive ? 'menu__link menu__link-active' : 'menu__link' 
                    : isActive ? 'menu__link menu__link-active' : 'menu__link menu__link-dark'} to={'/settings'}> 
                    {currentLanguage === 'en' ? 'Settings' : 'Настройки'}
                </NavLink>
            </ul>
        </nav>
    )
}

export default Menu;