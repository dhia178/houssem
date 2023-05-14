import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes, Types } from "mongoose";


@Schema({timestamps:true})
export class Order extends Document {

@Prop({required:true})
totalPrice :number ;
@Prop({required:false})  
numberOforder :number ;
@Prop({required:false}) 
dateCommande : string ;
@Prop({required:false}) 
facture:string ;
@Prop([{type:SchemaTypes.ObjectId,ref:'orderproduct'}])
orderproduct:Types.ObjectId[];
@Prop([{type:SchemaTypes.ObjectId,ref:'delivery'}])
delivery:Types.ObjectId[];
}
export const OrderSchema=SchemaFactory.createForClass(Order)
