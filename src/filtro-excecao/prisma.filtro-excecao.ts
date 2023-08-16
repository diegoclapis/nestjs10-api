import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class PrismaFiltroExcecao implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    if (exception.code === 'P2025') {
      return response.status(404).json({
        statusCode: 404,
        message: 'Categoria não encontrada',
        //message: exception.message,
      });
    }

    return response.status(500).json({
      statusCode: 500,
      message: 'Erro Interno do Servidor',
    });
  }
}
