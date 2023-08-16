import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaFiltroExcecao } from './filtro-excecao/prisma.filtro-excecao';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new PrismaFiltroExcecao);
  await app.listen(3000);
}
bootstrap();
