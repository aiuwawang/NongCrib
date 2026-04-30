import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { User } from '../modules/users/user.entity'; // Pastikan path entity bener
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres', 
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'nongcrib_db',
  entities: [User], // Masukin semua entity di sini
  migrations: ['dist/database/migrations/*.js'], // Tempat file migrasi setelah di-build
  seeds: ['src/database/seeds/**/*.seeder.ts'],  // Tempat file seeder lu
  synchronize: false, // Matikan ini kalau sudah pakai migration biar aman
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;