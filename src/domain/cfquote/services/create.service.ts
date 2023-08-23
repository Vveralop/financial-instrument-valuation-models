import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { CfQuote, CfQuoteKey } from '../models/cfquote.model';
import { CreateCfQuoteInput } from '../dto/create-cfquote.dto';
import * as uuid from 'uuid';

@Injectable()
export class CreateCfQuoteService {
  constructor(
    @InjectModel('cfquote')
    private readonly model: Model<CfQuote, CfQuoteKey>,
  ) { }

  create(input: CreateCfQuoteInput) {
    try {
      return this.model.create({
          ...input,
          id: uuid.v4(),
          createdAt: new Date(),
          updateAt: new Date(),
          userModify: ''
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
