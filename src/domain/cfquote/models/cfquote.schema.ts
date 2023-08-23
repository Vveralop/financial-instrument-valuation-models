import { Schema } from 'dynamoose';

export const CfQuoteSchema = new Schema({
    id: {
        type: String,
        hashKey: true,
    },
    status: {
        type: Object,
        schema: {
            status: String,
            vigencia: Date
        }
    },
    user: {
        type: Object,
        schema: {
            ejecutivoCotiza: String,
            ejecutivoComercial: String
        }
    },
    client: {
        type: Object,
        schema: {
            rut: String,
            nombre: String
        }
    },
    instrument: {
        type: Object,
        schema: {
            structure: String,
            startTenor: String,
            endTenor: String,
            discountCurve: String,
            creditSpread: Number,
            currency: String,
            notional: Number,
            paymentFrequency: String,
            rateType: String,
            rate: Number,
            forecastCurve: String,
            allowMultipleDisbursements: Boolean,
            //archivo usado Curves.json enviado por Jose 21-08-2023
            cashflows: {
                type: Array,
                schema: [{
                    type: Object,
                    schema: {
                        curveName: String,
                        refDate: Date,
                        currency: String,
                        nodes: {
                            type: Array,
                            schema: [{
                                date: Date,
                                value: Number
                            }]
                        },
                        interestRateIndex: {
                            type: Object,
                            schema: {
                                dayCounter: String,
                                tenor: String
                            }
                        },
                        updatedAt: Date
                    }
                }]
            }
        }
    },
    pricing: {
        type: Object,
        schema: {
            refDate: Date,
            npv: Number,
            parValue: Number,
            sensitivity: Number,
            cashflows: {
                type: Array,
                schema: [{
                type: Object,
                schema: {
                    date: Date,
                    disbursement: Number,
                    redemption: Number,
                    fixedRateCoupons: Number
                } 
                }]
            }
        }
    },
    userModify: String,
    updateAt: Date,
    createdAt: Date
});