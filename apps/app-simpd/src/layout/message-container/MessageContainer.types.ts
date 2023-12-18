import { ProfileFragment } from "@simpd/lib-web";
import { ReactNode } from "react";

export interface MessageContainerProps {
  children: ReactNode;
  profile?: ProfileFragment;
}