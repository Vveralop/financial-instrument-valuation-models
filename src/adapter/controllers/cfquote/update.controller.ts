import { Body, Controller, Param, Patch, UseFilters } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateCfQuoteInput } from 'src/domain/cfquote/dto/create-cfquote.dto';
import { CfQuoteKey } from 'src/domain/cfquote/models/cfquote.model';
import { UpdateCfQuoteService } from 'src/domain/cfquote/services';
import { HttpExceptionFilter } from '../../../shared/interceptor/http.exception.filter';

@UseFilters(HttpExceptionFilter)
@ApiTags('cfquote')
@Controller('cfquote')
export class UpdateCfQuoteController {
  constructor(private readonly cfQuoteUpdateService: UpdateCfQuoteService) {}
  @ApiParam({ name: 'id', type: String })
  @Patch('/:id')
  @ApiOperation({
    summary: 'Update some parameter with its ID',
  })
  @ApiBody({
    type: CreateCfQuoteInput,
  })
  @ApiResponse({ status: 200, description: 'when returns a record' })
  @ApiResponse({ status: 404, description: 'when record not found' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
  @Patch(':id')
  update(@Param('id') id: CfQuoteKey, @Body() body: CreateCfQuoteInput) {
    return this.cfQuoteUpdateService.update(id, body);
  }
}
