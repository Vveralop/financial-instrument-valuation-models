import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class user {
  @ApiProperty()
  ejecutivoCotiza: string;
  @ApiProperty()
  ejecutivoComercial: string;
}

class client {
    @ApiProperty()
    rut: string;
    @ApiProperty()
    nombre: string;
}

class nodes {
    @ApiProperty()
    date: string;
    @ApiProperty()
    value: number;
}

class interestRate {
    @ApiProperty()
    dayCounter: string;
    @ApiProperty()
    tenor: string;
}

class cashflowsInstrument {
    @ApiProperty()
    curveName: string;
    @ApiProperty()
    refDate: string;
    @ApiProperty()
    currency: string;
    @ApiProperty({
        type: nodes,
        isArray: true,
    })
    nodes: [ nodes ]
    @ApiProperty({
        type: interestRate,
        isArray: false,
      })
    interestRateIndex: interestRate;
    updatedAt: string;
}

class cashFlowsPricing {
    @ApiProperty()
    date: string;
    @ApiProperty()
    disbursement: number;
    @ApiProperty()
    redemption: number;
    @ApiProperty()
    fixedRateCoupons: number;
}

class instrument {
    @ApiProperty()
    structure: string;
    @ApiProperty()
    startTenor: string;
    @ApiProperty()
    endTenor: string;
    @ApiProperty()
    discountCurve: string;
    @ApiProperty()
    creditSpread: number;
    @ApiProperty()
    currency: string;
    @ApiProperty()
    notional: number;
    @ApiProperty()
    paymentFrecuency: string;
    @ApiProperty()
    rateType: string;
    @ApiProperty()
    rate: number;
    @ApiProperty()
    forecastCurve: string;
    @ApiProperty()
    allowMultipleDisbursements: boolean;
    @ApiProperty({
        type: cashflowsInstrument,
        isArray: true,
      })
    cashflows: [ cashflowsInstrument ]
}

class pricingData {
    @ApiProperty()
    refDate: string;
    @ApiProperty()
    npv: number;
    @ApiProperty()
    parValue: number;
    @ApiProperty()
    sensitivity: number;
    @ApiProperty({
        type: cashFlowsPricing,
        isArray: true,
      })
    cashflows: [
        cashFlowsPricing
    ]
}

class status {
    @ApiProperty()
    status: string;
    @ApiProperty()
    vigencia: string;
}
 
export class CreateCfQuoteInput {
    @ApiProperty({
        type: status,
        isArray: false,
    })    
    @IsNotEmpty()
    status: status;

    @ApiProperty({
        type: user,
        isArray: false,
      })
    @IsNotEmpty()
    user: user;

    @ApiProperty({
        type: client,
        isArray: false,
    })
    @IsNotEmpty()
    client: client;

    @ApiProperty({
        type: instrument,
        isArray: false,
    })
    @IsNotEmpty()
    instrument: instrument;

    @ApiProperty({
        type: pricingData,
        isArray: false,
    })
    @IsNotEmpty()
    pricing: pricingData

    @ApiProperty()
    userModify: string;
    @ApiProperty()
    updateAt: Date;
    @ApiProperty()
    createdAt: Date;
}