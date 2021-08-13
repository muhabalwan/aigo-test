import React from "react";
interface IProps {
  children: React.ReactNode
}
const Controls = ({ children }: IProps) => {
  return <div>{children}</div>;
};
export default Controls;