interface ICartProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
}

export interface ICartResponse {
    id: number;
    products: ICartProduct[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

export interface IAddCartProduct {
    id: number;
    quantity: number;
}

export interface IAddCartBody {
    userId?: number;
    products: IAddCartProduct[];
}
