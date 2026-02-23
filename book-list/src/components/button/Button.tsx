import "./Button.css";
import clsx from "clsx";

interface ButtonProps {
  content: string;
  variant?: "primary" | "secondary"
}

const Button = ({ content, variant = "primary" }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "my-btn",
        variant === "primary" && "btn-primary",
        variant === "secondary" && "btn-secondary",
      )}
    >
      {content}
    </button>
  );
};

export default Button;
