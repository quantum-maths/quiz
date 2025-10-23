import type { ReactNode } from "react";
import "./style.css";

const Header = ({ children }: { children: ReactNode }) => {
  return <h2 className="header">{children}</h2>;
};

export default Header;
