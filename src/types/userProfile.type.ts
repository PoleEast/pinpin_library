import { AccountRequestDTO } from "./user.type";

interface UserProfileResponseDTO {
  bio?: string;
  fullname?: string;
  nickname: string;
  isFullNameVisible?: boolean;
  avatar?: string;
  coverPhoto?: string;
  birthday?: Date;
  gender?: number;
  phone?: string;
  email?: string;
  address?: string;
  originCountry?: number;
  visited_countries?: number[];
  language?: number[];
  currency?: number[];
  travelInterests?: number[];
  travelStyles?: number[];
  user?: AccountRequestDTO;
}

export type { UserProfileResponseDTO };
