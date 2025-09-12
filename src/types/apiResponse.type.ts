interface ApiResponse<T = void> {
  message: string;
  statusCode: number;
  data?: T;
}

interface ApiErrorResponse extends ApiResponse<any> {
  error?: string;
}

export type { ApiResponse, ApiErrorResponse };
