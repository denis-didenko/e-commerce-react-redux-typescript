export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface IGetProductsResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}

export interface IGetProductsProps {
    limit?: number;
    skip?: number;
    hasPagination?: boolean;
}

export interface ICategory {
    id: string;
    name: string;
}
