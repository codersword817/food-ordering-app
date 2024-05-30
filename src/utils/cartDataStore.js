import { createSlice } from "@reduxjs/toolkit";

const cartDataStore = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// cardDataStore returns 2 things actions, reducer
export const { addItem, removeItem, clearCart } = cartDataStore.actions;
export default cartDataStore.reducer;
