import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hero')
export class HeroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('int')
  difficulty: number;

  @Column('int')
  countDifficulty: number;

  @Column({type:'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

}