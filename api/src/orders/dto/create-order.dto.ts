import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderDto {

    @ApiProperty({
        type:String,
        description:"this is required property"
    })

    @IsNumber()
    @IsNotEmpty()
    totalPrice:number;

    @ApiProperty({
        type:String,
        description:"this is required property"
    })

    @IsNumber()
    @IsNotEmpty()
    numberOforder:number;
}
