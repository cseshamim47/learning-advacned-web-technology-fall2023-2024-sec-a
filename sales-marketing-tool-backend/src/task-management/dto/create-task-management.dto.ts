import { IsDateString, IsIn, IsNotEmpty, IsString, Validate } from "class-validator";
import { IsCustomDateFormatConstraint } from "../validators/custom-date.validator";

export class CreateTaskManagementDto {
    @IsNotEmpty()
    @IsString()
    taskName: string;
    
    @IsNotEmpty()
    @IsString()
    taskDesc: string;
    
    @IsNotEmpty()
    @IsString()
    @Validate(IsCustomDateFormatConstraint)
    dueDate: string;

    
    @IsNotEmpty()
    @IsString()
    @IsIn(['High', 'Medium', 'Low'], { message: 'Priority must be "High", "Medium", or "Low"' })
    priority: string;

}
