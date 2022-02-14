import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      const withQuantity = {
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.price,
      };

      const neededItem = state.value.find(
        (item) => item.id === action.payload.id
      );
      if (neededItem) {
        const newState = state.value.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.price,
            };
          } else {
            return item;
          }
        });
        state.value = newState;
        toast.success("Item Quantity Increased!");
      } else {
        state.value = [...state.value, withQuantity];
        toast.success("Item Added!");
      }
    },

    minus: (state, action) => {
      let isDeleted = false;

      const newState = state.value.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity == 1) {
            isDeleted = true;
          }
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.totalPrice - item.price,
          };
        } else {
          return item;
        }
      });

      if (!isDeleted) {
        state.value = newState;
        toast.success("Item Quantity Decreased!");
      } else {
        const neededItem = state.value.find(
          (item) => item.id === action.payload
        );
        state.value.splice(state.value.indexOf(neededItem), 1);
        toast.success("Item Removed!");
      }
    },
    remove: (state, action) => {
      const neededItem = state.value.find((item) => item.id === action.payload);
      state.value.splice(state.value.indexOf(neededItem), 1);
      toast.success("Item Removed!");
    },
    removeAll: (state) => {
      state.value = [];
      toast.success("Cart Cleared!");
    },
  },
});

export const { add, remove, removeAll, minus } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;
export default cartSlice.reducer;
