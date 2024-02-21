import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/Product";
import { ProductComment } from "../models/ProductComment";

const initialState: {
  products: Product[];
  openedProduct: Product;
  success: boolean;
} = {
  products: [],
  success: true,
  openedProduct: {
    id: 0,
    name: "",
    count: 0,
    size: {
      width: 0,
      height: 0,
    },
    weight: "",
    comments: [],
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<{ product: Product }>) {
      const newProduct = action.payload.product;
      state.products = [...state.products, newProduct];
    },
    removeProduct(state, action: PayloadAction<{ product: Product }>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.product.id
      );
    },
    addComment(
      state,
      action: PayloadAction<{ product: Product; comment: ProductComment }>
    ) {
      const modifiedProduct = action.payload.product;
      const foundProduct = state.products.filter(
        (product) => product.id === modifiedProduct.id
      )[0];
      foundProduct.comments = [
        ...foundProduct.comments,
        action.payload.comment,
      ];
    },
    removeComment(
      state,
      action: PayloadAction<{ product: Product; comment: ProductComment }>
    ) {
      const modifiedProduct = action.payload.product;
      const foundProduct = state.products.filter(
        (product) => product.id === modifiedProduct.id
      )[0];
      foundProduct.comments = foundProduct.comments.filter(
        (comment) => comment.id !== action.payload.comment.id
      );
    },
    setOpenedProduct(state, action: PayloadAction<{ product: Product }>) {
      state.openedProduct = action.payload.product;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
