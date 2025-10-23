import { type ReactNode, type HTMLAttributes, type FC } from "react";
import "./style.css";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ children, ...props }) => {
  return (
    <p className="paragraph" {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
