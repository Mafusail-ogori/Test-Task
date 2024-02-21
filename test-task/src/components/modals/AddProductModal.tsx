import { ChangeEvent, FormEvent } from "react";
import { ButtonType } from "../../models/ButtonType";
import { Button } from "../../ui/Button";
import { CardWrapper } from "../../ui/CardWrapper";
import { Input } from "../../ui/Input";
import { UiVariant } from "../../models/UiVariant";
import classes from "./AddProductModal.module.css";
import { useState } from "react";
import { AppDispatch, useAppDispatch } from "../../store";
import { productActions } from "../../store/productSlice";
import { Product } from "../../models/Product";

export const AddProductModal: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => {
  const [name, setName] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const dispatch: AppDispatch = useAppDispatch();

  const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const countInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  };

  const imageInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  const weightInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  const heightInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setHeight(+event.target.value);
  };

  const widthInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setWidth(+event.target.value);
  };

  const formSubmitClickHandler = (event: FormEvent<HTMLFormElement>) => {
    const addedProduct: Product = {
      id: new Date().toISOString(),
      name: name,
      count: count,
      imageUrl: imageUrl,
      size: {
        width: width,
        height: height,
      },
      weight: weight,
      comments: [],
    };

    console.log(addedProduct);
    dispatch(productActions.addProduct({ product: addedProduct }));
    event.preventDefault();
  };

  return (
    <form
      onSubmit={formSubmitClickHandler}
      className={classes["modal-container"]}
    >
      <CardWrapper variant={UiVariant.Light} className={classes["modal"]}>
        <h1>Adding product</h1>
        <div className={classes["horizontal-container"]}>
          <Input
            label="Name"
            type="text"
            required
            onChange={nameInputChangeHandler}
          />
          <Input
            label="Product count"
            type="number"
            required
            onChange={countInputChangeHandler}
          />
        </div>
        <div className={classes["horizontal-container"]}>
          <Input
            label="Image URL"
            type="text"
            onChange={imageInputChangeHandler}
          />
          <Input
            label="Weight"
            type="text"
            required
            onChange={weightInputChangeHandler}
          />
        </div>
        <div className={classes["horizontal-container"]}>
          <Input
            label="Width"
            type="number"
            required
            onChange={heightInputChangeHandler}
          />
          <Input
            label="Height"
            type="number"
            required
            onChange={widthInputChangeHandler}
          />
        </div>

        <div className={classes["horizontal-container"]}>
          <Button type={ButtonType.Submit} variant={UiVariant.Light}>
            Confirm
          </Button>
          <Button
            type={ButtonType.Button}
            onClick={onClick}
            variant={UiVariant.Light}
          >
            Cancel
          </Button>
        </div>
      </CardWrapper>
    </form>
  );
};
