export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
}

interface IRating {
    rate: number;
    count: number;
}

export interface ICategory {
    id: string;
    name: string;
}
