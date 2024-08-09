import { createSlice } from "@reduxjs/toolkit";

export interface IThemeState {
    isDarkTheme: boolean;
}

const initialState: IThemeState = {
    isDarkTheme: true,
};

const themeReducer = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state: IThemeState) => {
            const bodyElement = document.getElementById('root') as HTMLBodyElement;
            if (bodyElement){
                state.isDarkTheme = !state.isDarkTheme;
                bodyElement.classList.toggle('dark');
            }
        },
    },
})

// exporting Reducer
export default themeReducer.reducer;

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeReducer.actions;
