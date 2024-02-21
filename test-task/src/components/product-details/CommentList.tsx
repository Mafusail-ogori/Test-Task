import { ProductComment } from "../../models/ProductComment";
import { UiVariant } from "../../models/UiVariant";
import { AppDispatch, useAppDispatch } from "../../store";
import { Button } from "../../ui/Button";
import { CardWrapper } from "../../ui/CardWrapper";
import classes from "./CommentList.module.css";
import { productActions } from "../../store/productSlice";
import { Product } from "../../models/Product";
import { FaRegTrashAlt } from "react-icons/fa";

export const CommentList: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch: AppDispatch = useAppDispatch();

  const removeCommentClickHandler = (comment: ProductComment) => {
    dispatch(productActions.removeComment({ product, comment }));
  };

  return (
    <ul className={classes["comment-list-container"]}>
      {product.comments.map((comment: ProductComment) => (
        <li key={comment.id}>
          <CardWrapper variant={UiVariant.Light} className={classes["comment"]}>
            <span>{comment.date.toISOString()}</span>
            <p>{comment.description}</p>
            <Button onClick={() => removeCommentClickHandler(comment)}>
              <FaRegTrashAlt />
            </Button>
          </CardWrapper>
        </li>
      ))}
    </ul>
  );
};
