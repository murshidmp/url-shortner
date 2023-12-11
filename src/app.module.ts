// src/app.module.ts

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UrlModule } from './url/url.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UrlModule, PrismaModule],
})
export class AppModule {}
