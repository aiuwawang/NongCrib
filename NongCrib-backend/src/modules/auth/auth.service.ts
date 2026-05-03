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

    
    const user = await this.usersRepository.findOne({ where: { email } });
    
    
    
    if (!user) {
      throw new UnauthorizedException('Kredensial tidak valid!');
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      throw new UnauthorizedException('Kredensial tidak valid!');
    }

    
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