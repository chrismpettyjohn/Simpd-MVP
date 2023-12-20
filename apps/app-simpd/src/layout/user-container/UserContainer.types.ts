import { SiteHeaderProps } from "layout/site-header/SiteHeader.types";
import { ReactNode } from "react";

export interface UserContainerProps {
  children: ReactNode;
  headerProps?: SiteHeaderProps;
}