// src/url/url.module.ts

import { Module } from '@nestjs/common';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: 'your-secret-key', // Provide your secret key here
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [UrlController],
  providers: [UrlService],
})
export class UrlModule {}
