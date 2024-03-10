import { ContainerProps } from "@/types";
import { FC } from "react";

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[1200px] m-auto px-4">{children}</div>;
};

export default Container;