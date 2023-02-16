import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedbackEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;

  @Column()
  email: string;

  @Column()
  message: string;
}
