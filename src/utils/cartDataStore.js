// import { createSlice } from "@reduxjs/toolkit";
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
    removeItem: (state, action) => {
      // console.log(id);
      // console.log(current(state));
      // return state.items.filter((e) => e.id !== id);
      // state.items.pop();
      state.items.forEach((e, idx) => {
        if (e.id === action.payload) {
          state.items.splice(idx, 1);
        }
      });
      // state.items.find((e) => e.id === id);
    },
    clearCart: (state) => {
      // console.log(state);
      // console.log(current(state));
      state.items.length = 0;
      // mutate the state or return the new state
      // return {
      //   items: []
      // } ;
    },
  },
});

// cardDataStore returns 2 things actions, reducer
export const { addItem, removeItem, clearCart } = cartDataStore.actions;
export default cartDataStore.reducer;
