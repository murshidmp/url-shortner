// url.controller.ts
import { Controller, Post, Body, Get, Param, UseGuards, Req } from '@nestjs/common';
import { UrlService } from './url.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('url')
export class UrlController {
  constructor(private urlService: UrlService) {}

  @UseGuards(JwtAuthGuard)
  @Post('shorten')
  async shortenUrl(@Body('original') original: string, @Req() req: any) {
    const userId = req.user.userId // Extract user ID from the JWT payload
    const short = await this.urlService.createShortUrl(original, userId);
    return { short };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':short')
  async getOriginalUrl(@Param('short') short: string, @Req() req: any) {
    const userId = req.user.userId; // Extract user ID from the JWT payload
    const original = await this.urlService.getOriginalUrl(short, userId);
    return { original };
  }
}
