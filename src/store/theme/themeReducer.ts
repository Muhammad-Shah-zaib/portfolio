import { createSlice } from "@reduxjs/toolkit";
import getInitialTheme from "../../utils/getInitialTheme";

export interface IThemeState {
    isDarkTheme: boolean;
    initialThemeDark: boolean;
}

const initialState: IThemeState = {
    isDarkTheme: true,
    initialThemeDark: getInitialTheme(),
};

const themeReducer = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state: IThemeState) => {
            const bodyElement = document.getElementById('root') as HTMLBodyElement;
            if (bodyElement) {
                state.isDarkTheme = !state.isDarkTheme;
                // pushing the state into local storage for persistence
                localStorage.setItem('isDarkTheme', JSON.stringify(state.isDarkTheme));
                bodyElement.classList.toggle('dark');
            }
        },
        setInitialTheme: (state: IThemeState) => {
            const bodyElement = document.getElementById('root') as HTMLBodyElement;
            if (!state.initialThemeDark && bodyElement) {
                bodyElement.classList.remove('dark');
                state.isDarkTheme = false;
            }
        }
    },
})

// exporting Reducer
export default themeReducer.reducer;

// Action creators are generated for each case reducer function
export const { toggleTheme, setInitialTheme } = themeReducer.actions;
