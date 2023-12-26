import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateRecipientsManagementDto{
    @IsOptional() @IsNotEmpty() @IsString()
    recipients?: string;
    
    @IsOptional() @IsNotEmpty() @IsString()
    category?: string;
}
