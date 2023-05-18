export interface IProduct {
  id: number
  title: string
  description?: string
}

export interface IGetProducts {
  products: IProduct[]
}

export interface IGetProduct {
  product: IProduct
}