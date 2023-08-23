import { Controller, Delete, Param, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CfQuoteKey } from 'src/domain/cfquote/models/cfquote.model';
import { DeleteCfQuoteService } from 'src/domain/cfquote/services';
import { HttpExceptionFilter } from '../../../shared/interceptor/http.exception.filter';

@UseFilters(HttpExceptionFilter)
@ApiTags('cfquote')
@Controller('cfquote')
export class DeleteCfQuoteController {
  constructor(private readonly cfQuoteDeleteService: DeleteCfQuoteService) {}

  @Delete(':id')
  delete(@Param('id') id: CfQuoteKey) {
    return this.cfQuoteDeleteService.delete(id);
  }
}
