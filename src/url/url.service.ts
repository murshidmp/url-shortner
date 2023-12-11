// src/url/url.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UrlService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  generateShortUrl(length: number = 6): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let shortUrl = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      shortUrl += characters[randomIndex];
    }
    return shortUrl;
  }

  async createShortUrl(original: string, userId: string): Promise<string> {
    const short = this.generateShortUrl();
    const url = await this.prisma.url.create({
      data: {
        original,
        short,
        user: { connect: { id: userId } }, // Connect the URL to the user
      },
    });
    return url.short;
  }

  async getOriginalUrl(short: string, userId: string): Promise<string | null> {
    const url = await this.prisma.url.findFirst({
      where: { short, userId },
    });
    return url ? url.original : null;
  }
}
