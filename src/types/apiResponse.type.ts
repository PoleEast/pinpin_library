interface ApiResponseDTO<T = void> {
  message: string;
  statusCode: number;
  data?: T;
}

interface ApiErrorResponseDTO extends ApiResponseDTO<any> {
  error?: string;
}

export type { ApiResponseDTO, ApiErrorResponseDTO };
