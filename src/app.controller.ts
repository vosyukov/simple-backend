import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse} from '@nestjs/swagger';
import { AppService } from './app.service';
import {CreateCatDto} from "./dto";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('sdsdf')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sdsd33eef')

  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getHello2(@Body() params: CreateCatDto): string {
    return this.appService.getHello();
  }
}
