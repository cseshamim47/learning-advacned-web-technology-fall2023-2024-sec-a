import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskManagement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    taskName: string;
    
    @Column()
    taskDesc: string;
    
    @Column()   
    dueDate: string;

    @Column()   
    priority: string;

}
