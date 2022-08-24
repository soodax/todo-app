import './SettingsMode.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import { CHANGE_MODE } from '../../redux/settings-reducer';
import React from 'react';
import { useAppDispatch } from '../../hooks/hooks';

interface SettingsModeProps {
    currentLanguage: string
    darkMode: boolean
}

const SettingsMode: React.FC<SettingsModeProps> = ({
    currentLanguage,
    darkMode
}) => {

    const dispatch = useAppDispatch();

    const handleChange = () => {
        !darkMode ? dispatch(CHANGE_MODE(true)) : dispatch(CHANGE_MODE(false));
    };

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header">
                <Typography>
                    {currentLanguage === 'en' ? 'Dark mode' : 'Темная тема'}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {currentLanguage === 'en'
                        ? 'You can use dark mode.'
                        : 'Вы можете использовать темную тему'}
                </Typography>

                <Switch onChange={handleChange} checked={darkMode}/>
                {currentLanguage === 'en'
                    ? !darkMode ? 'Light mode' : 'Dark mode'
                    : !darkMode ? 'Светлая тема' : 'Темная тема'}
            </AccordionDetails>
        </Accordion>
    )
}

export default SettingsMode;