import { ContainerProps } from "@/types";
import { FC } from "react";

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[1200px] m-auto ">{children}</div>;
};
