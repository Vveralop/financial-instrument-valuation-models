import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { CfQuote, CfQuoteKey } from '../models/cfquote.model';

@Injectable()
export class DeleteCfQuoteService {
  constructor(
    @InjectModel('cfquote')
    private readonly model: Model<CfQuote, CfQuoteKey>,
  ) { }

  async delete(key: CfQuoteKey) {
    try {
      const cfQuote = await this.model.get(key);
      if (!cfQuote){
        throw new NotFoundException;
      } else {
        await this.model.delete(key);
        return {
          statusCode: 200,
          message: 'OK',
          data: {}
        };
      }
  
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
