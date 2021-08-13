import React from "react";

interface IProps {
  children: React.ReactNode
}
const Layers = ({ children }: IProps) => {
  return <div>{children}</div>;
};
export default Layers;