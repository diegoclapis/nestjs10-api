import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CategoriaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
