
import cardItems from "./cardItems";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopItems: cardItems,
  remain: 100000000000,
};

export const cardSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {

    moneyChange: (state, action) => {
      state.shopItems.forEach((item) => {
        if (item.id === action.payload.id) {
          // console.log(action.payload);
          item.quantity = parseInt(action.payload.value);
        }
        
      });
        
      let total = 0;
      state.shopItems.forEach((item) => {
        total += Number(item.price) * Number(item.quantity);
      });
      state.total = total;
      state.remain=100000000000 - Number(state.total)
    }
    
    
  },
});

export const { moneyChange } = cardSlice.actions;
export default cardSlice.reducer;
