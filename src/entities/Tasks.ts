import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Tasks {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    author: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({
        default: false
    })
    finished: boolean;
}
