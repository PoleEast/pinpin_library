import { GoogleMapsPlaceBusinessStatus, GoogleMapsPlacePriceLevel } from "../constants/google.constant.js";
import { Coordinates, TimeOfDay } from "./common.type.js";

interface SearchLocationResponseDTO {
  locations: SearchLocationDTO[];
  nextPageToken: string;
}

interface SearchLocationDTO {
  phoneNumber: string;
  rating: number;
  businessStatus: GoogleMapsPlaceBusinessStatus;
  priceLevel: GoogleMapsPlacePriceLevel;
  userRatingCount: number;
  name: string;
  primaryType: string;
  address: string;
  id: string;
  photoURL: string;
  IconMaskBaseURL: string;
}

interface GetLocationByIdResponseDTO extends SearchLocationDTO {
  location: Coordinates;
  googleMapsUri: string;
  website?: string;
  openingTimePeriods: OpeningTimePeriods[];
  reviews: Review[];
  priceRange: PriceRange;
  timeZone: string;
}

interface PriceRange {
  min: string;
  max: string;
  currencyCode: string;
}

interface Review {
  reviewerDisplayName: string;
  photoUri: string;
  time: string;
  rating: number;
  text: string;
}

interface OpeningTimePeriods {
  open: TimeOfDay;
  close: TimeOfDay;
  day: number[];
}

export { SearchLocationResponseDTO, SearchLocationDTO, GetLocationByIdResponseDTO, OpeningTimePeriods, Review, PriceRange };
