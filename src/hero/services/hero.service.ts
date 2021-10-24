import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HeroEntity } from '../models/hero.entity';
import { Hero } from '../models/hero.interface';

@Injectable()
export class HeroService {
    constructor(
        @InjectRepository(HeroEntity)
        private readonly heroEntityRepository: Repository<Hero>
    ) {}

    async getAll() {
        const heroes = await this.heroEntityRepository.find();
        return heroes;
    }

    async create(hero:Hero) {
        const heroToSave = await this.heroEntityRepository.save(hero);
        return heroToSave;
    }
}
