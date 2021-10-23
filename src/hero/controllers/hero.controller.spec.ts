import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { HeroModule } from '../hero.module';
import { HeroEntity } from '../models/hero.entity';
import { Hero } from '../models/hero.interface';
import { HeroService } from '../services/hero.service';
import { HeroController } from './hero.controller';

describe('HeroController', () => {
  let controller: HeroController;
  let mock:Hero = {
    id: 1,
    name:"Anivia",
    difficulty:5,
    countDifficulty:12,
    createdAt: new Date('2021/07/10')
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroService,
        {
          provide: getRepositoryToken(HeroEntity),
          useValue: mock
        }
      ],
      controllers: [HeroController],
    }).compile();

    controller = module.get<HeroController>(HeroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
