export interface AuthFormInitial {
  email?: string;
  nickname?: string;
  password?: string;
  newPassword?: string;
  confirmPassword?: string;
  updateImgFile?: File[];
  image?: Blob;
  endPoint?: string;
}
