import { Product } from "../../models/Product";
import classes from "./ProductImage.module.css";

export const ProductImage: React.FC<{
  product: Product;
  className?: string;
}> = ({ product, className }) => {
  return (
    <div className={`${classes["product-image-container"]} ${className}`}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className={classes["product-image"]}
      />
    </div>
  );
};
