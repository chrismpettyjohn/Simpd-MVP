import { ReactNode } from "react";

export interface DropdownMenuProps {
  children: ReactNode;
  onToggle(): void;
  mountOn: any;
}