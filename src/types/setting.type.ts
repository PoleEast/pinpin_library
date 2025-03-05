import { CountryResponseDTO } from "./country.type";
import { CurrencyResponseDTO } from "./currency.type";
import { LanguageResponseDTO } from "./language.type";
import { TravelInterestsResponseDTO } from "./travelInterest.type";
import { UserProfileResponseDTO } from "./userProfile.type";

interface SettingResponseDTO {
  country: CountryResponseDTO;
  currency: CurrencyResponseDTO;
  language: LanguageResponseDTO;
  travelInterest: TravelInterestsResponseDTO;
  travelStyle: TravelInterestsResponseDTO;
}

export type { SettingResponseDTO };
