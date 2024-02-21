import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CardWrapper } from "../../ui/CardWrapper";
import { ProductDetailsImage } from "./ProductDetailsImage";
import { Product } from "../../models/Product";
import classes from "./ProductDetails.module.css";
import { CommentList } from "./Comment";

export const ProductDetails = () => {
  const openedProduct: Product = useSelector(
    (state: RootState) => state.product.openedProduct
  );

  return (
    <section className={classes["product-details-container"]}>
      <CardWrapper>
        <h1>{openedProduct.name}</h1>

        <ProductDetailsImage product={openedProduct} />
        <div className={classes["product-details-comment-section "]}>
          <CommentList comments={openedProduct.comments} />
        </div>
      </CardWrapper>
    </section>
  );
};
