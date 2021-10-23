import { Controller, Get } from '@nestjs/common';
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
}
