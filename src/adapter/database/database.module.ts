import { DynamooseModule } from 'nestjs-dynamoose';
import * as dynamoose from 'dynamoose';
import { Module, OnModuleInit } from '@nestjs/common';

@Module({
	imports: [
        DynamooseModule.forRoot({
          local: process.env.IS_DDB_LOCAL === 'false' || 'http://localhost:8000',
          aws: { 
            region: process.env.REGION,
            accessKeyId: process.env.ACCESSKEYID,
            secretAccessKey: process.env.SECRETACCESSKEY,
          },
          table: {
            create: true, //process.env.IS_DDB_LOCAL === 'true', --Probar en ambiente distinto
          },
        }),
	],
	controllers: [],
	providers: [],
}
)
export class Database implements OnModuleInit{
  onModuleInit() {
      if (process.env.IS_DDB_LOCAL === 'false') {
          const ddb = new dynamoose.aws.ddb.DynamoDB({
                    "credentials": {
                      "accessKeyId": process.env.ACCESSKEYID || '',
                      "secretAccessKey": process.env.SECRETACCESSKEY || ''
                    },
                    "region": process.env.REGION
                });
          dynamoose.aws.ddb.set(ddb);
      }
    }
}