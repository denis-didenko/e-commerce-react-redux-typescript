export interface IAddUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface IUserResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
    maidenName: string;
    age: number;
    phone: string;
    password: string;
    birthDate: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    domain: string;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
}

export interface IAuthUser {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}

interface Hair {
    color: string;
    type: string;
}

interface Coordinates {
    lat: number;
    lng: number;
}

interface Address {
    address: string;
    city: string;
    coordinates: Coordinates;
    postalCode: string;
    state: string;
}

interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

interface Company {
    address: {
        address: string;
        city: string;
        coordinates: {
            lat: number;
            lng: number;
        };
        postalCode: string;
        state: string;
    };
    department: string;
    name: string;
    title: string;
}
