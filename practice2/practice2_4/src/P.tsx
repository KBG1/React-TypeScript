import type { FC, PropsWithChildren, ReactNode } from "react";

export type PProps = {};

const P: FC<PropsWithChildren<PProps>> = (props) => {
  return <p {...props}></p>;
};

export default P;
