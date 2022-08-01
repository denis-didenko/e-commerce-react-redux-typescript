export interface ILogin {
    username: string;
    password: string;
}

export interface ILoginResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}

export interface IToken {
    token: string;
}

export interface IUserId {
    userId: number;
}
