import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Provider } from "react-redux";
import store from "./store";
import { ProductSection } from "./components/product/ProductSection";
import { ProductDetails } from "./components/product-details/ProductDetails";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <ProductSection /> },
      {
        path: "product-details/:id*",
        element: <ProductDetails />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
