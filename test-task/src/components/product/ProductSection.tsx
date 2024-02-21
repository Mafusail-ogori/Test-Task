import { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "../../ui/Button";
import { ButtonType } from "../../models/ButtonType";
import { IoMdAdd } from "react-icons/io";
import Backdrop from "../../ui/Backdrop";
import { AddProductModal } from "../modals/AddProductModal";
import { CardWrapper } from "../../ui/CardWrapper";
import classes from "./ProductSection.module.css";
import { ProductList } from "./ProductList";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Product } from "../../models/Product";

export const ProductSection = () => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const modalOpenClickHandler = () => {
    setIsModalOpened((prev) => {
      return !prev;
    });
  };

  const products: Product[] = useSelector(
    (state: RootState) => state.product.products
  );

  return (
    <section className={classes["section-container"]}>
      <CardWrapper className={classes["section"]}>
        <h1>Product List</h1>
        {isModalOpened
          ? (function () {
              const modal = document.getElementById("modal");
              if (modal) {
                return ReactDOM.createPortal(
                  <>
                    <Backdrop onClick={modalOpenClickHandler} />
                    <AddProductModal onClick={modalOpenClickHandler} />
                  </>,
                  modal
                );
              }
            })()
          : null}
        <ProductList products={products} />
        <Button type={ButtonType.Button} onClick={modalOpenClickHandler}>
          Add Item <IoMdAdd />
        </Button>
      </CardWrapper>
    </section>
  );
};
