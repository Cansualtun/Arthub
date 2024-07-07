import AXIOS from "./axios";
import { AxiosRequestConfig } from "axios";
import { IBaseRequest } from "@/types";

type APIServiceConfig = AxiosRequestConfig & IBaseRequest;

class API {
  constructor() {}

  fetch(param: APIServiceConfig) {
    param.callbackBefore && param.callbackBefore();
    return new Promise<any>((resolve, reject) => {
      AXIOS(param)
        .then((response) => {
          param.callbackSuccess && param.callbackSuccess(response);
          resolve(response.data);
        })
        .catch((err) => {
          param.callbackError && param.callbackError();
          reject(err);
        })
        .finally(() => {
          param.callbackAfter && param.callbackAfter();
        });
    });
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new API();
