import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { User } from '../modules/users/user.entity'; 
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres', 
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'nongcrib_db',
  entities: [User], 
  migrations: ['dist/database/migrations/*.js'], 
  seeds: ['src/database/seeds/**/*.seeder.ts'],  
  synchronize: false, 
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;