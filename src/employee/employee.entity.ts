import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id : Number;

    @Column()
    name : string;

    @Column()
    department : string;

}