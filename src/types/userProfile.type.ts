import { CountryRequestDTO } from "./country.type";
import { CurrencyRequestDTO } from "./currency.type";
import { LanguageRequestDTO } from "./language.type";
import { TravelInterestsRequestDTO } from "./travelInterest.type";
import { TravelStyleRequestDTO } from "./travelStyle.type";

interface userProfileRequestDTO {
  bio: string;
  fullname: string;
  nickname: string;
  isFullNameVisible?: boolean;
  avatar: string;
  coverPhoto: string;
  birthday: Date;
  gender: number;
  phone: string;
  email: string;
  address: string;
  originCountry: CountryRequestDTO;
  visited_countries: CountryRequestDTO[];
  language: LanguageRequestDTO[];
  currency: CurrencyRequestDTO[];
  travelInterests: TravelInterestsRequestDTO[];
  travelStyles: TravelStyleRequestDTO[];
}

export type { userProfileRequestDTO };
