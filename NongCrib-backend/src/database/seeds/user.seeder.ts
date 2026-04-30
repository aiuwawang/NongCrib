import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../../modules/users/user.entity'; // Pastikan path ke entity bener
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(User);

    const adminEmail = process.env.ADMIN_EMAIL || 'hari@nongcrib.com';
    const adminPass = process.env.ADMIN_PASSWORD || 'hari123';

    // Cek biar nggak duplikat
    const adminExists = await repository.findOneBy({ email: adminEmail });

    if (!adminExists) {
      // Kita hash dulu passwordnya
      const hashedPassword = await bcrypt.hash(adminPass, 10);
      
      await repository.insert({
        email: adminEmail,
        password: hashedPassword,
        role: 'admin',
      });
      console.log(`Admin ${adminEmail} berhasil ditambahkan!`);
    } else {
      console.log('Admin sudah ada, skip seeding.');
    }
  }
}