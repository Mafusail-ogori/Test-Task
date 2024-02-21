import { UiVariant } from "../models/UiVariant";
import classes from "./Input.module.css";
import { ChangeEvent } from "react";

export const Input: React.FC<{
  type?: string;
  label?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  variant?: UiVariant;
}> = ({ type, label, onChange, placeholder, className, required, variant }) => {
  return (
    <div
      className={`${
        variant === UiVariant.Light
          ? classes["light-input-container"]
          : classes["dark-input-container"]
      } ${className}`}
    >
      <label>{label}</label>
      <input
        required={required}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={
          variant === UiVariant.Light
            ? classes["light-input"]
            : classes["dark-input"]
        }
      />
    </div>
  );
};
