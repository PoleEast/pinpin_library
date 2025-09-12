import { CountryResponse } from "./country.type";
import { CurrencyResponse } from "./currency.type";
import { LanguageResponse } from "./language.type";
import { TravelInterestsResponse } from "./travelInterest.type";
import { TravelInterestTypeResponse } from "./travelInterestType.type";
import { UserProfileResponse } from "./userProfile.type";

interface SettingResponse {
  country: CountryResponse[];
  currency: CurrencyResponse[];
  language: LanguageResponse[];
  travelInterestType: TravelInterestTypeResponse[];
  travelInterest: TravelInterestsResponse[];
  travelStyle: TravelInterestsResponse[];
}

export type { SettingResponse };
