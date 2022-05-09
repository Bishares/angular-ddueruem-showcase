import { Geoloc } from "./geoloc.model";

export interface Address{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geoloc
}