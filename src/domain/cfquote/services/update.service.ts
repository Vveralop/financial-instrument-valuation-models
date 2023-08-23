import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { CfQuote, CfQuoteKey } from '../models/cfquote.model';
import { CreateCfQuoteInput } from '../dto/create-cfquote.dto';

@Injectable()
export class UpdateCfQuoteService {
  constructor(
    @InjectModel('cfquote')
    private readonly model: Model<CfQuote, CfQuoteKey>,
  ) { }

  update(key: CfQuoteKey, input: CreateCfQuoteInput) {
    try {
      return this.model.update(key, input);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
