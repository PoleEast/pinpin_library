interface RegisterRequestDTO {
  account: string;
  password: string;
  nickname: string;
}

//TODO: 要更改介面定義:增加使用者的照片資料
interface UserResponseDTO {
  nickname: string;
}

interface LoginRequestDTO {
  account: string;
  password: string;
}
export type { RegisterRequestDTO, UserResponseDTO, LoginRequestDTO };
