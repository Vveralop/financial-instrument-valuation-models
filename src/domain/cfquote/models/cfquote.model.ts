import { CreateCfQuoteInput } from "../dto/create-cfquote.dto";

export type CfQuoteKey = {
    id: string;
  };

  class status {
    status: string;
    vigencia: string;
  }

  class user {
    ejecutivoCotiza: string;
    ejecutivoComercial: string;
  }
  
  class client {
      rut: string;
      nombre: string;
  }
  
  class nodes {
      date: string;
      value: number;
  }
  
  class interestRate {
      dayCounter: string;
      tenor: string;
  }
  
  class cashflowsInstrument {
      curveName: string;
      refDate: string;
      currency: string;
      nodes: [
          nodes
      ]
      interestRateIndex: interestRate;
      updatedAt: string;
  }
  
  class cashFlowsPricing {
      date: string;
      disbursement: number;
      redemption: number;
      fixedRateCoupons: number;
  }
  
  class instrument {
      structure: string;
      startTenor: string;
      endTenor: string;
      discountCurve: string;
      creditSpread: number;
      currency: string;
      notional: number;
      paymentFrecuency: string;
      rateType: string;
      rate: number;
      forecastCurve: string;
      allowMultipleDisbursements: boolean;
      cashflows: [
          cashflowsInstrument
      ]
  }
  
  class pricingData {
      refDate: string;
      npv: number;
      parValue: number;
      sensitivity: number;
      cashflows: [
          cashFlowsPricing
      ]
  }
  
  export class CfQuote extends CreateCfQuoteInput {
      id: string; 
      user: user;
      client: client;
      instrument: instrument;
      pricing: pricingData;
      status: status;
      userModify: string;
      updateAt: Date;
      createdAt: Date; 
  }