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

    // 1. Cari user berdasarkan email
    const user = await this.usersRepository.findOne({ where: { email } });
    
    // Tips: Jangan kasih tau spesifik "Email tidak ditemukan" di production 
    // biar gak kena brute-force, tapi buat tahap dev gini udah oke banget.
    if (!user) {
      throw new UnauthorizedException('Kredensial tidak valid!');
    }

    // 2. Bandingkan password
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      throw new UnauthorizedException('Kredensial tidak valid!');
    }

    // 3. Return data yang aman (jangan kirim password balik ke client)
    return {
      message: 'Login Berhasil!',
      user: { 
        id: user.id, 
        email: user.email, 
        role: user.role 
      },
    };
  }
}