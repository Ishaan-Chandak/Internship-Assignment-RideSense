import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// creation of the bike entity
// schema of the table in the bike database

@Entity()
export class Bike {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  make!: string;

  @Column()
  model!: string;

  @Column()
  year!: number;

  @Column()
  type!: string;
}
