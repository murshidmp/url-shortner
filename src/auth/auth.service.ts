import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signup(email: string, password: string) {
    const hash = await bcrypt.hash(password, 10);

    try {
      const user = await this.prisma.user.create({
        data: { email, hash },
      });
      return this.generateToken(user.id);
    } catch (error) {
      if (error?.code === 'DuplicateKey') {
        throw new UnauthorizedException(
          'Email is already in use',
        );
      }
      throw error;
    }
  }

  async signin(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.hash,
    );

    if (!passwordMatch) {
      throw new UnauthorizedException('Incorrect password');
    }

    return this.generateToken(user.id);
  }

  private generateToken(userId: string) {
    const payload = { sub: userId };
    return this.jwtService.sign(payload);
  }
}
