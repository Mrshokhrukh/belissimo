import { createSlice } from "@reduxjs/toolkit";
import { products, user } from "../db/data";
import { RootState } from "./store";

const cartSlice = createSlice({
  name: "cart",
  initialState: user,
  reducers: {
    addProduct: (state, action) => {
      if (state.cart.find((item: any) => item.id === action.payload)) {
        state.cart.map((pr: any) => {
          pr.quantity++;
        });
      } else {
        try {
          const data = products.find((item) => item.id === action.payload);
          state.cart.push({
            ...data,
            quantity: 1,
          });
        } catch (error) {
          alert("error has been occured");
        }
      }
    },

    increaseQTY: (state, action) => {
      let decreased = state.cart.find((data: any) => data.id == action.payload);
      decreased.quantity++;
    },
    decreseQTY: (state, action) => {
      let decreased = state.cart.find((data: any) => data.id == action.payload);
      decreased.quantity--;
      if (decreased.quantity < 1) {
        state.cart.filter((data: any) => data.id !== action.payload);
      }
    },
  },
});

export const { addProduct, decreseQTY, increaseQTY } = cartSlice.actions;
export const selectCount = (state: RootState) => state.userCart;
export default cartSlice.reducer;
