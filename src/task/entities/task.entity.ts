import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 191 })
  description: string;

  @Column({ default: false })
  isCompleted: boolean;
}
