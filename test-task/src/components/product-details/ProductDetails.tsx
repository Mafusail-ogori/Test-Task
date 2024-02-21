import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CardWrapper } from "../../ui/CardWrapper";
import { ProductDetailsImage } from "./ProductDetailsImage";
import { Product } from "../../models/Product";
import classes from "./ProductDetails.module.css";
import { CommentList } from "./CommentList";
import { Button } from "../../ui/Button";

export const ProductDetails = () => {
  const openedProduct: Product = useSelector(
    (state: RootState) => state.product.openedProduct
  );

  return (
    <section className={classes["product-details-container"]}>
      <CardWrapper>
        <div className={classes["product-details"]}>
          <h1>{openedProduct.name.toUpperCase()}</h1>
          <ProductDetailsImage product={openedProduct} />
          <Button>Add Comment</Button>
        </div>
        <div className={classes["product-details-comment-section "]}>
          <CommentList product={openedProduct} />
        </div>
      </CardWrapper>
    </section>
  );
};
