import { Outlet } from "react-router-dom";
import classes from "./RootLayout.module.css";
import { useEffect } from "react";
import { productActions } from "../store/productSlice";
import { useAppDispatch } from "../store";

export const RootLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(productActions.getInfoFromStorage());
  }, []);
  return (
    <>
      <main className={classes["outlet"]}>
        <Outlet />
      </main>
    </>
  );
};
