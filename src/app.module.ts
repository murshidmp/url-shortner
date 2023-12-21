import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UrlModule } from './url/url.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join('public', '..', 'public'),
  }),AuthModule, UrlModule, PrismaModule],
})
export class AppModule {}
