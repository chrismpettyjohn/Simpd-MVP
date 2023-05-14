import { ProfileFragment, ProfileUpdateInput } from "@simpd/lib-web";

export interface ProfileEditorProps {
  defaultProfile?: ProfileFragment;
  onSave(profileDTO: ProfileUpdateInput): Promise<void>;
}