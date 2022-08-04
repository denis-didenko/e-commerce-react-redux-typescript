export interface ICartProduct {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
}

export interface ICartProducts {
    id: number;
    quantity: number;
    product: ICartProduct;
}

export interface IFetchCartProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
}
export interface IFetchCartResponse {
    id: number;
    products: IFetchCartProduct[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

export interface IFetchCartBody {
    id: number;
    quantity: number;
}
