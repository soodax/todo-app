import './Settings.scss';
import SettingsBackground from '../SettingsBackground/SettingsBackground';
import SettingsLanguage from '../SettingsLanguage/SettingsLanguage';
import SettingsMode from '../SettingsMode/SettingsMode';
import { useAppSelector } from '../../hooks/hooks';
import React from 'react';

const Settings = () => {

    const currentLanguage = useAppSelector(state => state.settings.currentLanguage);
    const darkMode = useAppSelector(state => state.settings.darkMode);

    return (
        <div className={!darkMode ? 'settings' : 'settings settings-dark'}>
            <SettingsBackground currentLanguage={currentLanguage}/>
            <SettingsLanguage currentLanguage={currentLanguage}/>
            <SettingsMode darkMode={darkMode} currentLanguage={currentLanguage}/>
        </div>
    )
}

export default Settings;