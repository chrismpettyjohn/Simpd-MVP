import { AlbumFragment } from "@simpd/lib-web";

export interface AlbumEditDialogProps {
  album: AlbumFragment;
  onChanges(): void;
}