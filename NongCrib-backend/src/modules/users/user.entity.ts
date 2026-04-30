import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number; // Tambahin ! di sini

  @Column({ unique: true })
  email!: string; // Dan di sini

  @Column()
  password!: string; // Di sini juga

  @Column({ default: 'admin' })
  role!: string; // Sini juga

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date; // Terakhir di sini
}