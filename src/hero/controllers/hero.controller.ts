import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Hero } from '../models/hero.interface';
import { HeroService } from '../services/hero.service';

@Controller('hero')
export class HeroController {
    constructor(
        private heroService: HeroService
    ) {}
    @Get()
    async getAll() {
        return await this.heroService.getAll();
    }

    @Get('/:id')
    async getOne(@Param() req) {
        return await this.heroService.getOne(req.id);
    }

    @Post()
    async create(@Body() hero:Hero) {
        return await this.heroService.create(hero);
    }

    @Put('/:id')
    async update(@Param() req ,@Body() hero:Hero) {
        return await this.heroService.update(req.id,hero);
    }

    @Delete('/:id')
    async delete(@Param() req) {
        return await this.heroService.delete(req.id);
    }
}
