import './SettingsBackground.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import wallpaper1 from '../../assets/images/wallpaper1.jpg';
import wallpaper2 from '../../assets/images/wallpaper2.jpg';
import wallpaper3 from '../../assets/images/wallpaper3.jpg';
import wallpaper4 from '../../assets/images/wallpaper4.jpg';
import { CHANGE_BG } from '../../redux/settings-reducer';
import React from 'react';
import { useAppDispatch } from '../../hooks/hooks';

interface SettingsBackgroundProps {
    currentLanguage: string
}

const SettingsBackground: React.FC<SettingsBackgroundProps> = ({
    currentLanguage
}) => {

    const dispatch = useAppDispatch();

    const changeBackground = (bgID: number) => {
        dispatch(CHANGE_BG({bgID}));
    }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography>
                    {currentLanguage === 'en' ? 'Wallpapers' : 'Обои'}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {currentLanguage === 'en'
                        ? 'You can choose wallpaper for your ToDo list.'
                        : 'Вы можете выбрать обои для вашего списка.'}

                </Typography>
                <div className='settingsBackground__bgRow'>
                    <div className='settingsBackground__bgCol' >
                        <img src={wallpaper1} alt="" onClick={() => changeBackground(1)} />
                    </div>
                    <div className='settingsBackground__bgCol'>
                        <img src={wallpaper2} alt="" onClick={() => changeBackground(2)} />
                    </div>
                    <div className='settingsBackground__bgCol'>
                        <img src={wallpaper3} alt="" onClick={() => changeBackground(3)} />
                    </div>
                    <div className='settingsBackground__bgCol'>
                        <img src={wallpaper4} alt="" onClick={() => changeBackground(4)} />
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default SettingsBackground;