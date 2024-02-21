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
    id: "",
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
      const data = JSON.stringify(state.products);
      localStorage.setItem("products", data);
    },
    removeProduct(state, action: PayloadAction<{ product: Product }>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.product.id
      );
      const data = JSON.stringify(state.products);
      localStorage.setItem("products", data);
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
      const data = JSON.stringify(state.products);
      localStorage.setItem("products", data);
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
      const data = JSON.stringify(state.products);
      localStorage.setItem("products", data);
    },
    setOpenedProduct(state, action: PayloadAction<{ product: Product }>) {
      state.openedProduct = action.payload.product;
      const data = JSON.stringify(state.openedProduct);
      localStorage.setItem("openedProduct", data);
    },
    getInfoFromStorage(state) {
      state.products = JSON.parse(localStorage.getItem("products") ?? "[]");
      state.openedProduct = JSON.parse(
        localStorage.getItem("openedProduct") ?? "{}"
      );
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
