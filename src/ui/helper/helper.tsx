import { type FC, type ReactNode } from "react";
import "./style.css";

interface HelperProps {
  children: ReactNode;
}

const Helper: FC<HelperProps> = ({ children }) => {
  return <span className="helper">{children}</span>;
};

export default Helper;
