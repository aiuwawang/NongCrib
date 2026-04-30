import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { User } from '../modules/users/user.entity'; // Pastikan path entity bener

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres', 
  host: 'localhost',
  port: 5432,
  username: 'aiuwawang', // Username DB lu
  password: 'Usahaaiuwawang',     // Password DB lu
  database: 'nongcrib_db',
  entities: [User], // Masukin semua entity di sini
  migrations: ['dist/database/migrations/*.js'], // Tempat file migrasi setelah di-build
  seeds: ['src/database/seeds/**/*.seeder.ts'],  // Tempat file seeder lu
  synchronize: false, // Matikan ini kalau sudah pakai migration biar aman
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;