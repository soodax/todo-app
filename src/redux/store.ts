import mainReducer from "./main-reducer";
import settingsReducer from "./settings-reducer";
import { configureStore } from "@reduxjs/toolkit/";

const store = configureStore({
    reducer: {
        main: mainReducer,
        settings: settingsReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;