import { FC, ReactNode } from "react";
import { Navbar } from "./Navbar";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div data-theme="light" className="min-h-screen h-full ">
      <Navbar />
      {children}
    </div>
  );
};
