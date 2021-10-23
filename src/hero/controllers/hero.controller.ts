import { Body, Controller, Get } from '@nestjs/common';
import { HeroService } from '../services/hero.service';

@Controller('hero')
export class HeroController {
    constructor(
        private heroService: HeroService
    ) {}
    @Get()
    getAll() {
        return this.heroService.getAll();
    }
}
