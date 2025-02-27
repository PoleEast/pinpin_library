interface RegisterRequestDTO {
  account: string;
  password: string;
  nickname: string;
}

interface LoginRequestDTO {
  account: string;
  password: string;
}

//TODO: 要更改介面定義:增加使用者的照片資料
interface LoginResponseDTO {
  nickname: string;
}

interface AccountRequestDTO {
  password?: string;
  account?: string;
  email?: string;
  createAt?: Date;
}

export type { RegisterRequestDTO, LoginResponseDTO, LoginRequestDTO, AccountRequestDTO };
