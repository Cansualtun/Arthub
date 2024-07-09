export interface IBaseRequest {
  callbackBefore?: () => void;
  callbackAfter?: () => void;
  callbackSuccess?: (response?: any) => void;
  callbackError?: (response?: any) => void;
}
export interface IBaseApiResponse {
    data: any | null;
    success: boolean;
    isLoading: boolean;
    error: string;
    errorMessage: string;
  }
  