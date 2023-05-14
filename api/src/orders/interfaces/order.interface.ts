import { Document } from "mongoose";

export interface IOrder extends Document{
    readonly totalprice :number ;
    readonly numberoforder :number ;
}