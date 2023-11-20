import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// exported it, so i can reuse it in productDetails.tsx
export interface CartItem {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
  subTotalAmount: number;
}

interface CartState {
  cartItems: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.subTotalAmount = existingItem.quantity * existingItem.price;
      } else {
        const newItem = {
          ...action.payload,
          subTotalAmount: action.payload.quantity * action.payload.price,
        };
        state.cartItems.push(newItem);
      }
      state.totalAmount += action.payload.subTotalAmount;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const removedItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload
      );

      if (removedItem) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        );
        state.totalAmount -= removedItem.subTotalAmount;
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ itemId: number; quantity: number }>
    ) => {
      const itemToUpdate = state.cartItems.find(
        (item) => item.id === action.payload.itemId
      );
      if (itemToUpdate) {
        itemToUpdate.quantity = action.payload.quantity;
        itemToUpdate.subTotalAmount = itemToUpdate.quantity * itemToUpdate.price;
        state.totalAmount +=
          (action.payload.quantity - itemToUpdate.quantity) *
          itemToUpdate.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
