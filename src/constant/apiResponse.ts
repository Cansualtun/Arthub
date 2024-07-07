import { IBaseApiResponse } from "@/types";

export const initialApiResponse: IBaseApiResponse = {
  data: [],
  error: "",
  errorMessage: "",
  success: false,
  isLoading: false,
};

export const initialNullApiResponse: IBaseApiResponse = {
  data: null,
  error: "",
  errorMessage: "",
  success: false,
  isLoading: false,
};
