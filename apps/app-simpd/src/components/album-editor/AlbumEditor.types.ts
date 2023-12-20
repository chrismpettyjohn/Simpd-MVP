import { AlbumCreateInput } from "@simpd/lib-web";

export interface AlbumEditorProps {
  defaultAlbum?: AlbumCreateInput;
  onSave(albumDTO: AlbumCreateInput): Promise<void> | void;
}