import { UiVariant } from "../models/UiVariant";
import { ButtonType } from "../models/ButtonType";
import classes from "./Button.module.css";

export const Button: React.FC<{
  onClick?: () => void;
  className?: string;
  children: any;
  variant?: UiVariant;
  type?: ButtonType;
}> = ({ onClick, className, children, variant, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        variant === UiVariant.Light
          ? classes["light-button"]
          : classes["dark-button"]
      } ${className}`}
    >
      {children}
    </button>
  );
};
