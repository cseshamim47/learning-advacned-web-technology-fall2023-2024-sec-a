import { IsDateString, IsIn, IsNotEmpty, IsString, Validate } from "class-validator";

export class CreateRecipientsManagementDto {
    @IsNotEmpty()
    @IsString()
    recipients: string;
    
    @IsNotEmpty()
    @IsString()
    category: string;
    
}
