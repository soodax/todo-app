import { createSlice, PayloadAction } from "@reduxjs/toolkit/";

interface SettingsInitialState {
    currentBG: number
    currentLanguage: string
    darkMode: boolean
}

const initialState: SettingsInitialState = {
    currentBG: 1,
    currentLanguage: 'en',
    darkMode: false,
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        CHANGE_BG(state, action: PayloadAction<{bgID: number}>) {
            state.currentBG = action.payload.bgID;
        },
        CHANGE_LANGUAGE(state, action: PayloadAction<{language: string}>) {
            state.currentLanguage = action.payload.language;
        },
        CHANGE_MODE(state, action: PayloadAction<boolean>) {
            state.darkMode = action.payload;
        }
    }
})

export const { CHANGE_BG, CHANGE_LANGUAGE, CHANGE_MODE } = settingsSlice.actions;

export default settingsSlice.reducer;