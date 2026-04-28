import { Controller, Post, Body, Get } from '@nestjs/common'; // Tambahin Get di sini
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    return this.authService.login(loginDto);
  }

  @Get('fix-password')
  async fix() {
    return this.authService.fixPassword();
  }
}