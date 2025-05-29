interface RegisterRequestDTO {
  account: string;
  password: string;
  nickname: string;
}

interface LoginRequestDTO {
  account: string;
  password: string;
}

interface LoginResponseDTO {
  nickname: string;
  avatar_public_id: string;
}

interface AccountRequestDTO {
  password?: string;
  account?: string;
  email?: string;
  createAt?: Date;
}

export type { RegisterRequestDTO, LoginResponseDTO, LoginRequestDTO, AccountRequestDTO };
