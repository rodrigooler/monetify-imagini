import { Gender } from "../enum/Gender";

export interface IUser {
  name: string;
  picture: string;
  birthday: Date;
  gender: Gender;
}
