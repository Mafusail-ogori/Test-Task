import { Product } from "../../models/Product";
import { ProductItem } from "./ProductItem";
import classes from "./ProductList.module.css";

export const ProductList: React.FC<{ products: Product[] }> = ({
  products,
}) => {
  return (
    <ul className={classes["product-list"]}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
