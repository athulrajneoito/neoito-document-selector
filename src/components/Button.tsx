
import styles from "./Button.style.module.scss";

interface ButtonProp {
  isLoading?: boolean;
  isDisabled?: boolean;
  inputClasses?: string;
  icon?: string;
  showIcon?: boolean;
  small?: boolean;
  id?: string;
  type: "button" | "submit" | "reset";
  variant: "primary" | "secondary";
  value: string;
}

/**
 *  Object to return button classes for different variants
 */
const variantClasses = {
  primary: styles.primaryBtn,
  secondary: styles.secondaryBtn,
};

/**
 *
 * @param param0
 * @returns
 */
const Button = ({
  value,
  isDisabled,
  variant,
  type,
  inputClasses,
  icon,
  id,
  showIcon = false,
  small = false,
}: ButtonProp) => {
  return (
    <button
      type={type}
      id={id}
      disabled={isDisabled}
      className={` w-full transition-all rounded-md text-sm disabled:pointer-events-none disabled:opacity-20 font-medium px-3 py-1 h-7 ${
        variantClasses[variant]
      } ${inputClasses} ${small ? "h-6 text-13 py-0" : ""}`}
      value={value}
    >
      <span className="flex items-center gap-2 w-full justify-center">
        {showIcon && <img src={icon} />}
        {value}
      </span>
    </button>
  );
};

export default Button;
