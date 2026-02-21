import "./Button.css";

interface ButtonProps{
    content: string
}

const Button = ({ content }: ButtonProps) => {
  return <button className="my-btn">{content}</button>;
};

export default Button;
