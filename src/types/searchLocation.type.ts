import { GoogleMapsPlaceBusinessStatus, GoogleMapsPlacePriceLevel } from "../constants/google.contants.js";

interface IsearchLocationResponseDTO {
  locations: IsearchLocationDTO[];
  nextPageToken: string;
}

interface IsearchLocationDTO {
  phoneNumber: string;
  rating: number;
  businessStatus: GoogleMapsPlaceBusinessStatus;
  priceLevel: GoogleMapsPlacePriceLevel;
  userRatingCount: number;
  name: string;
  primaryType: string;
  address: string;
  id: string;
  photo: string;
}

export { IsearchLocationResponseDTO, IsearchLocationDTO };
