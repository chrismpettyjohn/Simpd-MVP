export interface UploadMediaDropdownProps {
  files: File[];
  onAddFile(file: File): void;
  onRemoveFile(file: File): void;
}