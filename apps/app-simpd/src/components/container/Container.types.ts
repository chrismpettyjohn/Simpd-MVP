import { HTMLProps, ReactNode } from "react"

export interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}