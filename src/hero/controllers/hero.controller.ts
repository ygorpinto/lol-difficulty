import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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

    @Post()
    async create(@Body() hero:Hero) {
        return await this.heroService.create(hero);
    }

    @Put()
    async update(@Body() id:number, hero:Hero) {
        return await this.heroService.update(id,hero);
    }

    @Delete()
    async delete(@Body() id:number) {
        return await this.heroService.delete(id);
    }
}
