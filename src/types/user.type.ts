interface RegisterRequest {
  account: string;
  password: string;
  nickname: string;
}

interface LoginRequest {
  account: string;
  password: string;
}

interface LoginResponse {
  nickname: string;
  avatar_public_id: string;
}

interface AccountRequest {
  password?: string;
  account?: string;
  email?: string;
  createAt?: Date;
}

export type { RegisterRequest, LoginResponse, LoginRequest, AccountRequest };
