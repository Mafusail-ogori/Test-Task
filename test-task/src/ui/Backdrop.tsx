import classes from "./Backdrop.module.css";

const Backdrop: React.FC<{
  children?: any;
  onClick: () => void;
  className?: string;
}> = (props, className) => {
  return (
    <div
      className={`${classes["backdrop"]} ${className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
