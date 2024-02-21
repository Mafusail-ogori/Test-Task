import { Product } from "../../models/Product";
import classes from "./ProductDetailsImage.module.css";

export const ProductDetailsImage: React.FC<{ product: Product }> = ({
  product,
}) => {
  return (
    <div className={classes["image-container"]}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className={classes["image"]}
      />
    </div>
  );
};
