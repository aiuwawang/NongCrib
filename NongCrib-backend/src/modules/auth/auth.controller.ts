import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK) // Standar untuk login sukses adalah 200 OK
  async login(@Body() loginDto: any) {
    // Memanggil logic login yang sudah kita rapihkan di AuthService
    return this.authService.login(loginDto);
  }
}