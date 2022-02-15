import { Photo } from "./Photo";

export interface Member {
    userName: string;
    photoUrl: string;
    age: number;
    created: Date;
    lastActive: Date;
    knowsAs?: any;
    gender: string;
    introduction: string;
    lookingFor: string;
    interest?: any;
    city: string;
    country: string;
    photos: Photo[];
}

