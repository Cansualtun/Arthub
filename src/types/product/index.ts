import { IBaseApiResponse } from ".."

export interface IProductListResponse {
    page: number
    perPage: number
    totalItems: number
    totalPages: number
    items: Item[]
  }
  
  export interface Item {
    collectionId: string
    collectionName: string
    created: string
    id: string
    image: string
    name: string
    updated: string
  }
  
export interface IGetProductListResult
extends Omit<IBaseApiResponse, "data"> {
data: IProductListResponse | null;
}
