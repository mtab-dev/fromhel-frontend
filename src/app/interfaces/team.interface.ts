import { ISocial } from "./social.interface";

export interface ITeam {
  image?: string,
  name: string,
  role: string,
  social?: Array<ISocial>
}