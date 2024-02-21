import { UiVariant } from "../models/UiVariant";
import classes from "./CardWrapper.module.css";

export const CardWrapper: React.FC<{
  children: any;
  className?: string;
  variant?: UiVariant;
}> = ({ children, className, variant }) => {
  return (
    <div
      className={`${
        variant === UiVariant.Light
          ? classes["light-card-container"]
          : classes["dark-card-container"]
      } ${className}`}
    >
      {children}
    </div>
  );
};
