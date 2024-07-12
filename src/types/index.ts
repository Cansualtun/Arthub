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
  export interface Product {
    id: string;
    collectionId: string;
    image: string;
    images: string[];
    name: string;
    tag?: {
      tag: string[];
    };
    details: {
      key: string;
      value: string;
    }[];
  }
  export interface Catalog {
    collectionId: string
    collectionName: string
    created: string
    id: string
    image: string
    name: string
    updated: string
  }
  