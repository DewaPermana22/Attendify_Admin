import { createSlice,  } from "@reduxjs/toolkit";

interface themeState {
    darkmode : boolean
}

const initialState : themeState = {
    darkmode : false
}

export const themeSlice = createSlice({
    name : "theme",
    initialState : initialState,
    reducers : {
        iconDark : (state) => {
            state.darkmode = !state.darkmode
        },
        nightMode : (state, action) => {
            state.darkmode = action.payload
        }
    }
})

export const { iconDark, nightMode } = themeSlice.actions
export default themeSlice.reducer