import { DynamooseModule } from 'nestjs-dynamoose'
import {
  CreateCfQuoteController,
  DeleteCfQuoteController,
  SelectAllCfQuoteController,
  SelectCfQuoteController,
  UpdateCfQuoteController,
} from 'src/adapter/controllers/cfquote'

import { Module } from '@nestjs/common'

import { CfQuoteSchema } from './models/cfquote.schema'
import {
  CreateCfQuoteService,
  DeleteCfQuoteService,
  SelectAllCfQuoteService,
  SelectCfQuoteService,
  UpdateCfQuoteService,
} from './services'

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'cfquote',
        schema: CfQuoteSchema,
      },
    ]),
  ],
  controllers: [
    CreateCfQuoteController,
    DeleteCfQuoteController,
    UpdateCfQuoteController,
    SelectAllCfQuoteController,
    SelectCfQuoteController,
  ],
  providers: [
    CreateCfQuoteService,
    DeleteCfQuoteService,
    UpdateCfQuoteService,
    SelectAllCfQuoteService,
    SelectCfQuoteService,
  ],
})
export class CfquoteModule {}

