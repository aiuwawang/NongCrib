import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async login(loginDto: any) {
    const { email, password } = loginDto;

    
    const user = await this.usersRepository.findOne({ where: { email: email } });
    
    console.log('--- DEBUG AUTH ---');
    console.log('User ditemukan di DB:', user);

    if (!user) {
      throw new UnauthorizedException('Email tidak ditemukan!');
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      throw new UnauthorizedException('Password salah!');
    }

    
    return {
      message: 'Login Berhasil!',
      user: { id: user.id, email: user.email, role: user.role },
    };
  } 

  async fixPassword() {
    const emailTarget = 'hari@admin.com';
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    let user = await this.usersRepository.findOne({ where: { email: emailTarget } });

    if (user) {
      
      user.password = hashedPassword;
      await this.usersRepository.save(user); 
    } else {
      
      user = await this.usersRepository.save({
        email: emailTarget,
        password: hashedPassword,
        role: 'admin',
      });
    }

    return { 
      message: user ? 'Password admin berhasil diperbarui!' : 'Admin baru berhasil dibuat!', 
      email: emailTarget,
      hash: hashedPassword 
    };
  }
}