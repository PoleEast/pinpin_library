import { GoogleMapsPlaceBusinessStatus, GoogleMapsPlacePriceLevel } from "../constants/google.constant.js";
import { Coordinates, TimeOfDay } from "./common.type.js";

interface SearchLocationResponse {
  locations: Location[];
  nextPageToken: string;
}

interface Location {
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

interface GetLocationByIdResponse extends Location {
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

export { SearchLocationResponse, Location, GetLocationByIdResponse, OpeningTimePeriods, Review, PriceRange };
