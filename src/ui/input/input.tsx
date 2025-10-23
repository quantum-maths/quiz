import { forwardRef, type ForwardedRef, type InputHTMLAttributes } from "react";
import "./style.css";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref: ForwardedRef<HTMLInputElement>) => {
  return <input className="input" ref={ref} {...props} />;
});

export default Input;
