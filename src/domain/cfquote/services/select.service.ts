import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { CfQuote, CfQuoteKey } from '../models/cfquote.model';

@Injectable()
export class SelectCfQuoteService {
  constructor(
    @InjectModel('cfquote')
    private readonly model: Model<CfQuote, CfQuoteKey>,
  ) { }

  findOne(key: CfQuoteKey) {
    try {
      return this.model.get(key);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
