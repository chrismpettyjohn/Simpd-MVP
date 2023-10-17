import { HTMLProps, ReactNode } from "react";

export interface GridProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}