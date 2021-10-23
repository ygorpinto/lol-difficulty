import { Module } from '@nestjs/common';
import { HeroService } from './services/hero.service';
import { HeroController } from './controllers/hero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroEntity } from './models/hero.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([HeroEntity])
  ],
  providers: [HeroService],
  controllers: [HeroController]
})
export class HeroModule {}
