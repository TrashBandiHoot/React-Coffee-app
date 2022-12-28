import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        cream: "Cream",
        added_flavor: "Added Flavor"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseCream: (state, action) => {state.cream = action.payload},
        chooseAddedFlavor: (state, action) => {state.added_flavor = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseCream, chooseAddedFlavor } = rootSlice.actions;