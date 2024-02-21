import { NavLink } from "react-router-dom";
import { Product } from "../../models/Product";
import { Button } from "../../ui/Button";
import { IoArrowForwardSharp } from "react-icons/io5";
import { UiVariant } from "../../models/UiVariant";
import { CardWrapper } from "../../ui/CardWrapper";
import { ProductImage } from "./ProductImage";
import { FaRegTrashAlt } from "react-icons/fa";
import { AppDispatch, useAppDispatch } from "../../store";
import { productActions } from "../../store/productSlice";
import classes from "./ProductItem.module.css";

export const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch: AppDispatch = useAppDispatch();
  const deleteButtonClickHandler = () => {
    dispatch(productActions.removeProduct({ product: product }));
  };
  const detailsButtonClickHandler = () => {
    dispatch(productActions.setOpenedProduct({ product: product }));
  };

  return (
    <li>
      <CardWrapper
        variant={UiVariant.Light}
        className={classes["product-item"]}
      >
        <div className={classes["product-item-info"]}>
          <div className={classes["product-info"]}>
            <h2>{product.name.toUpperCase()}</h2>
            <span>
              Amount: {product.count} , size: {product.size.height} x{" "}
              {product.size.width}
            </span>
            <NavLink to={`/product-details/${product.id}`}>
              <Button
                variant={UiVariant.Light}
                onClick={detailsButtonClickHandler}
              >
                Product details
                <IoArrowForwardSharp />
              </Button>
            </NavLink>
          </div>

          {product.imageUrl ? <ProductImage product={product} /> : null}
        </div>

        <Button onClick={deleteButtonClickHandler}>
          <FaRegTrashAlt />
        </Button>
      </CardWrapper>
    </li>
  );
};
