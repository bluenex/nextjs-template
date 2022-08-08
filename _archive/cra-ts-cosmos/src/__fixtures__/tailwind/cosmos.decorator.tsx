import React, { ReactNode } from "react";
import "../../index.css";

const TailwindProviderDecorator = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);

export default TailwindProviderDecorator;
