import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { CfQuote, CfQuoteKey } from '../models/cfquote.model';

@Injectable()
export class SelectAllCfQuoteService {
  constructor(
    @InjectModel('cfquote')
    private readonly model: Model<CfQuote, CfQuoteKey>,
  ) { }

  async findAll() {
    try {
      return  await this.model.scan().exec()
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
