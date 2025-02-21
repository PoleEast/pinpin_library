interface userProfile {
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
  originCountry: string;
  visited_countries: string[];
  language: string[];
  currency: string[];
  travelInterests: string[];
  favoriteDestinations: string[];
  travelStyles: string[];
}
