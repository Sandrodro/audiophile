import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    remove: (state, action) => {
      const neededItem = state.value.find((item) => item.id === action.payload);
      state.value.splice(state.value.indexOf(neededItem), 1);
    },
    removeAll: (state) => {
      state.value = [];
    },
  },
});

export const { add, remove, removeAll } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;
export default cartSlice.reducer;
