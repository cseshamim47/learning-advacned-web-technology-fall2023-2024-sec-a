import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RecipientsManagement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    recipients: string;
    
    @Column()
    category: string;
}
