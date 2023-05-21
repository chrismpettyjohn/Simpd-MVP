import { MediaFragment } from "@simpd/lib-web";

export interface UploadNewMediaProps {
  onCreation(media: MediaFragment): void;
}