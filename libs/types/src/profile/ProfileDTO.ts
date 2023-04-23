export interface UpdateProfileDTOWire {
  username?: string;
  displayName?: string;
  biography?: string;
  location?: string;
  websiteURL?: string;
  profilePictureID?: number;
  coverPictureID?: number;
}

export const exampleUpdateProfileDTOWire: UpdateProfileDTOWire = {
  username: '',
  displayName: '',
  biography: '',
  location: '',
  websiteURL: '',
  profilePictureID: undefined,
  coverPictureID: undefined,
};
