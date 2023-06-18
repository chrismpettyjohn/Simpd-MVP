import { ReactNode } from "react";

export interface DialogProps {
  header?: ReactNode;
  children: ReactNode;
  onToggle?: () => void;
}