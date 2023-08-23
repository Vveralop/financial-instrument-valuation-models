import { Controller, Get, UseFilters } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SelectAllCfQuoteService } from 'src/domain/cfquote/services';
import { HttpExceptionFilter } from '../../../shared/interceptor/http.exception.filter';
import { CfQuote } from '@modules/cfquote/models/cfquote.model';

@UseFilters(HttpExceptionFilter)
@ApiTags('cfquote')
@Controller('cfquote')
export class SelectAllCfQuoteController {
  constructor(private readonly cfQuoteService: SelectAllCfQuoteService) {}

  @Get()
  @ApiOperation({
    summary: 'Returns some Cost of Found Quote with its ID',
  })
  @ApiResponse({ status: 200, description: 'when returns a record' })
  @ApiResponse({ status: 404, description: 'when record not found' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
  async findAll(): Promise<CfQuote[]> {
    return await this.cfQuoteService.findAll();
  }
}
