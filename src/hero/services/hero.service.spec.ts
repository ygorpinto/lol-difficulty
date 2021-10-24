import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HeroEntity } from '../models/hero.entity';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  let mock = {
    find: jest.fn(),
    save: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroService,
      {
        provide: getRepositoryToken(HeroEntity),
        useValue: mock
      }
      ]
    }).compile();

    service = module.get<HeroService>(HeroService);
  });

  it('should not be null', () => {
    expect(service.getAll()).not.toEqual(null);
  });
});
