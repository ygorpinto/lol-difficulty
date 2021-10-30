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

    async getOne(id:number) {
        const heroes = await this.heroEntityRepository.find({id:id});
        return heroes;
    }

    async create(hero:Hero) {
        const heroToSave = await this.heroEntityRepository.save(hero);
        return heroToSave;
    }

    async update(id:number, hero:Hero) {
        const heroToUpdate = await this.heroEntityRepository.update({id:id},hero);
        return heroToUpdate;
    }

    async delete(id:number) {
        const heroToDelete = await this.heroEntityRepository.delete({id:id});
        return heroToDelete;
    }
}
