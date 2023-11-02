import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateEmpDto } from './dto/create-emp.dto';
import { EmployeesService } from './employees.service';
import { Employee } from './interfaces/employees.interface';

@Controller('employees')
export class EmployeesController {

    constructor(private readonly empService: EmployeesService){}

    @Get()
    findAll(): Employee[]{
        return this.empService.findAll();
    }

    @Get(':username')
    findOne(@Param('username') username): Employee {
        return this.empService.findOne(username);
    }

    @Post()
    create(@Body() createEmpDto: Employee): Employee {
        return this.empService.create(createEmpDto);
    }

    @Delete(':username')
    delete(@Param('username') username: string): Employee | null {
        return this.empService.delete(username);
    }

    @Put(':username')
    update(@Param('username') username: string, @Body() updateEmpDto: Employee): Employee | null {
        return this.empService.update(username, updateEmpDto);
    }

}


