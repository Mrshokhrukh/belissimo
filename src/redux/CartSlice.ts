import { createSlice } from "@reduxjs/toolkit";
import { products, user } from "../db/data";
import { RootState } from "./store";

const cartSlice = createSlice({
  name: "cart",
  initialState: { ...user, totalSum: 0 },
  reducers: {
    addProduct: (state, action) => {
      if (state.cart.find((item: any) => item.id === action.payload)) {
        state.cart.find((data: any) => {
          if (data.id == action.payload) {
            data.quantity++;
          }
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
        state.cart = state.cart.filter((data: any) => data.id !== action.payload);
      }
    },
    calculateSum: (state) => {
      // state.totalSum = Number(data.price) * data.quantity;
      console.log('working');
      
    },
  },
});

export const { addProduct, decreseQTY, increaseQTY, calculateSum } = cartSlice.actions;
export const selectCount = (state: RootState) => state.userCart;
export default cartSlice.reducer;
