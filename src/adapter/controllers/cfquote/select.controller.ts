import { Controller, Get, NotFoundException, Param, UseFilters } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
} from '@nestjs/swagger';
import { CfQuoteKey } from 'src/domain/cfquote/models/cfquote.model';
import { SelectCfQuoteService } from 'src/domain/cfquote/services';
import { HttpExceptionFilter } from '../../../shared/interceptor/http.exception.filter';

@UseFilters(HttpExceptionFilter)
@ApiTags('cfquote')
@Controller('cfquote')
export class SelectCfQuoteController {
  constructor(private readonly cfQuoteService: SelectCfQuoteService) {}

  @ApiParam({ name: 'id', type: String })
  @Get('/:id')
  @ApiOperation({
    summary: 'Returns some Cost of Found Quote with its ID',
  })
  @ApiResponse({ status: 200, description: 'when returns a record' })
  @ApiResponse({ status: 404, description: 'when record not found' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
  @Get(':id')
  async findOne(@Param('id') id: CfQuoteKey) {
    const quote = await this.cfQuoteService.findOne(id);
    if (!quote) {
      throw new NotFoundException();
    }
    return quote;
  }
}
