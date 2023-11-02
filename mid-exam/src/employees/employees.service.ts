import { Injectable } from '@nestjs/common';
import { Employee } from './interfaces/employees.interface'

@Injectable()
export class EmployeesService {
    public employees: Employee[] = [
        {
            name: "Md Shamim Ahmed",
            contactno: "01123123",
            username: "cseshamim47",
            password: "123"
        },
        {
            name: "Faisal Amin Abir",
            contactno: "123123123",
            username: "xbir",
            password: "111"
        }
    ]

    findAll(): Employee[] {
        return this.employees;
    }

    findOne(username: string): Employee{
        return this.employees.find(employee => employee.username === username);
    }

    create(createEmpDto: Employee): Employee {

        const newEmployee: Employee = {
            ...createEmpDto,
        };

        this.employees.push(newEmployee);
        return newEmployee;
    }

    delete(username: string): Employee | null {
        const index = this.employees.findIndex((employee) => employee.username === username);
        if (index !== -1) {
          const deletedEmployee = this.employees.splice(index, 1)[0];
          return deletedEmployee;
        }
        return null; 
    }
    update(username: string, updateEmpDto: Employee): Employee | null {
        const index = this.employees.findIndex((employee) => employee.username === username);
        if (index !== -1) {
          this.employees[index] = {
            ...this.employees[index],
            ...updateEmpDto,
          };
          return this.employees[index];
        }
        return null; 
    }


    
}
