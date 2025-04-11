import { AccountRequestDTO } from "./user.type";

interface UserProfileResponseDTO {
  motto?: string;
  bio?: string;
  fullname?: string;
  nickname: string;
  isFullNameVisible?: boolean;
  avatar?: string;
  coverPhoto?: string;
  birthday?: Date;
  gender?: number;
  phone?: string;
  address?: string;
  originCountry?: number;
  visitedCountries?: number[];
  languages?: number[];
  currencies?: number[];
  travelInterests?: number[];
  travelStyles?: number[];
  user?: AccountRequestDTO;
}

interface UserProfileRequestDTO {
  motto?: string;
  bio?: string;
  fullname?: string;
  nickname: string;
  isFullNameVisible?: boolean;
  avatar?: string;
  coverPhoto?: string;
  birthday?: Date;
  gender?: number;
  phone?: string;
  address?: string;
  originCountry?: number;
  visitedCountries?: number[];
  languages?: number[];
  currencies?: number[];
  travelInterests?: number[];
  travelStyles?: number[];
}

export type { UserProfileResponseDTO, UserProfileRequestDTO };
