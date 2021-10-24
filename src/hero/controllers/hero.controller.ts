import { Body, Controller, Get, Post } from '@nestjs/common';
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
        return await this.heroService.create(hero)
    }
}
