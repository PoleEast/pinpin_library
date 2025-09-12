import { AvatarResponse } from "./avatar.type";
import { AccountRequest } from "./user.type";

interface UserProfileResponse {
  motto?: string;
  bio?: string;
  fullname?: string;
  nickname: string;
  isFullNameVisible?: boolean;
  avatar?: AvatarResponse;
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
  user?: AccountRequest;
}

interface UserProfileRequest {
  motto?: string;
  bio?: string;
  fullname?: string;
  nickname: string;
  isFullNameVisible?: boolean;
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

export type { UserProfileResponse, UserProfileRequest };
