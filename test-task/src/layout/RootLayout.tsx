import { Outlet } from "react-router-dom";
import classes from "./RootLayout.module.css";

export const RootLayout = () => {
  return (
    <>
      <main className={classes["outlet"]}>
        <Outlet />
      </main>
    </>
  );
};
