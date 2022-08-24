import './SettingsLanguage.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import { CHANGE_LANGUAGE } from '../../redux/settings-reducer';
import { useAppDispatch } from '../../hooks/hooks';
import React from 'react';

interface SettingsLanguageProps {
    currentLanguage: string
}

const SettingsLanguage: React.FC<SettingsLanguageProps> = ({
    currentLanguage
}) => {

    const dispatch = useAppDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        let language = event.target.value as string;
        dispatch(CHANGE_LANGUAGE({language}));
    };

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header">
                <Typography>
                    {currentLanguage === 'en' ? 'Language' : 'Язык'}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {currentLanguage === 'en'
                        ? 'You can choose language.'
                        : 'Вы можете выбрать язык.'}
                </Typography>
                <div className='settingsLanguage__row'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            {currentLanguage === 'en' ? 'Language' : 'Язык'}
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currentLanguage}
                            label="Language"
                            onChange={handleChange}>
                            <MenuItem value={'en'}>English</MenuItem>
                            <MenuItem value={'ru'}>Русский</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default SettingsLanguage;