import {fetchExchangeRates} from "../api/api_currencyapi";

const SET_EXCHANGE_RATES = 'SET_EXCHANGE_RATES';
const SET_SELECTED_CURRENCY_PAIRS = 'SET_SELECTED_CURRENCY_PAIRS';
const REMOVE_CURRENCY_PAIRS = 'REMOVE_CURRENCY_PAIRS';
const UPDATE_CURRENCY_PAIRS = 'UPDATE_CURRENCY_PAIRS';

const initialState = {
    settings: {
        location: 'auto:ip',
        language: 'ru',
    },
    isLoading: false,
    isNotFound: false,
    exchangeRates: {
        "meta": {
            "last_updated_at": "2023-06-01T23:59:59Z"
        },
        "data": {
            "ADA": {
                "code": "ADA",
                "value": 2.744225
            },
            "AED": {
                "code": "AED",
                "value": 3.673105
            },
            "AFN": {
                "code": "AFN",
                "value": 87.164809
            },
            "ALL": {
                "code": "ALL",
                "value": 102.089617
            },
            "AMD": {
                "code": "AMD",
                "value": 386.980543
            },
            "ANG": {
                "code": "ANG",
                "value": 1.801561
            },
            "AOA": {
                "code": "AOA",
                "value": 589.522865
            },
            "ARS": {
                "code": "ARS",
                "value": 240.187994
            },
            "AUD": {
                "code": "AUD",
                "value": 1.520303
            },
            "AVAX": {
                "code": "AVAX",
                "value": 0.071002
            },
            "AWG": {
                "code": "AWG",
                "value": 1.802504
            },
            "AZN": {
                "code": "AZN",
                "value": 1.700002
            },
            "BAM": {
                "code": "BAM",
                "value": 1.825627
            },
            "BBD": {
                "code": "BBD",
                "value": 2.01829
            },
            "BDT": {
                "code": "BDT",
                "value": 107.233894
            },
            "BGN": {
                "code": "BGN",
                "value": 1.817148
            },
            "BHD": {
                "code": "BHD",
                "value": 0.376993
            },
            "BIF": {
                "code": "BIF",
                "value": 2820.956226
            },
            "BMD": {
                "code": "BMD",
                "value": 1.000001
            },
            "BNB": {
                "code": "BNB",
                "value": 0.003285
            },
            "BND": {
                "code": "BND",
                "value": 1.350972
            },
            "BOB": {
                "code": "BOB",
                "value": 6.907409
            },
            "BRL": {
                "code": "BRL",
                "value": 5.014605
            },
            "BSD": {
                "code": "BSD",
                "value": 0.999623
            },
            "BTC": {
                "code": "BTC",
                "value": 0.000037
            },
            "BTN": {
                "code": "BTN",
                "value": 82.400694
            },
            "BWP": {
                "code": "BWP",
                "value": 13.787881
            },
            "BYN": {
                "code": "BYN",
                "value": 2.523094
            },
            "BYR": {
                "code": "BYR",
                "value": 19600
            },
            "BZD": {
                "code": "BZD",
                "value": 2.014929
            },
            "CAD": {
                "code": "CAD",
                "value": 1.344552
            },
            "CDF": {
                "code": "CDF",
                "value": 2332.004437
            },
            "CHF": {
                "code": "CHF",
                "value": 0.905642
            },
            "CLF": {
                "code": "CLF",
                "value": 0.029047
            },
            "CLP": {
                "code": "CLP",
                "value": 801.50134
            },
            "CNY": {
                "code": "CNY",
                "value": 7.094509
            },
            "COP": {
                "code": "COP",
                "value": 4391.007955
            },
            "CRC": {
                "code": "CRC",
                "value": 539.244622
            },
            "CUC": {
                "code": "CUC",
                "value": 1.004954
            },
            "CUP": {
                "code": "CUP",
                "value": 23.990403
            },
            "CVE": {
                "code": "CVE",
                "value": 102.930644
            },
            "CZK": {
                "code": "CZK",
                "value": 22.003244
            },
            "DJF": {
                "code": "DJF",
                "value": 177.720249
            },
            "DKK": {
                "code": "DKK",
                "value": 6.921312
            },
            "DOP": {
                "code": "DOP",
                "value": 54.625054
            },
            "DOT": {
                "code": "DOT",
                "value": 0.191971
            },
            "DZD": {
                "code": "DZD",
                "value": 136.494163
            },
            "EGP": {
                "code": "EGP",
                "value": 30.902734
            },
            "ERN": {
                "code": "ERN",
                "value": 15.000027
            },
            "ETB": {
                "code": "ETB",
                "value": 54.589281
            },
            "ETH": {
                "code": "ETH",
                "value": 0.000537
            },
            "EUR": {
                "code": "EUR",
                "value": 0.929332
            },
            "FJD": {
                "code": "FJD",
                "value": 2.240753
            },
            "FKP": {
                "code": "FKP",
                "value": 0.798358
            },
            "GBP": {
                "code": "GBP",
                "value": 0.798376
            },
            "GEL": {
                "code": "GEL",
                "value": 2.605005
            },
            "GGP": {
                "code": "GGP",
                "value": 0.798359
            },
            "GHS": {
                "code": "GHS",
                "value": 11.270283
            },
            "GIP": {
                "code": "GIP",
                "value": 0.798358
            },
            "GMD": {
                "code": "GMD",
                "value": 59.570065
            },
            "GNF": {
                "code": "GNF",
                "value": 8592.340658
            },
            "GTQ": {
                "code": "GTQ",
                "value": 7.826986
            },
            "GYD": {
                "code": "GYD",
                "value": 211.413395
            },
            "HKD": {
                "code": "HKD",
                "value": 7.831564
            },
            "HNL": {
                "code": "HNL",
                "value": 24.574733
            },
            "HRK": {
                "code": "HRK",
                "value": 7.002049
            },
            "HTG": {
                "code": "HTG",
                "value": 139.44694
            },
            "HUF": {
                "code": "HUF",
                "value": 344.855964
            },
            "IDR": {
                "code": "IDR",
                "value": 14914.01962
            },
            "ILS": {
                "code": "ILS",
                "value": 3.745056
            },
            "IMP": {
                "code": "IMP",
                "value": 0.798359
            },
            "INR": {
                "code": "INR",
                "value": 82.277114
            },
            "IQD": {
                "code": "IQD",
                "value": 1309.43306
            },
            "IRR": {
                "code": "IRR",
                "value": 42300.081538
            },
            "ISK": {
                "code": "ISK",
                "value": 139.320231
            },
            "JEP": {
                "code": "JEP",
                "value": 0.798359
            },
            "JMD": {
                "code": "JMD",
                "value": 154.531351
            },
            "JOD": {
                "code": "JOD",
                "value": 0.709301
            },
            "JPY": {
                "code": "JPY",
                "value": 138.753655
            },
            "KES": {
                "code": "KES",
                "value": 136.945344
            },
            "KGS": {
                "code": "KGS",
                "value": 87.586901
            },
            "KHR": {
                "code": "KHR",
                "value": 4119.282283
            },
            "KMF": {
                "code": "KMF",
                "value": 461.350501
            },
            "KPW": {
                "code": "KPW",
                "value": 899.97423
            },
            "KRW": {
                "code": "KRW",
                "value": 1313.176744
            },
            "KWD": {
                "code": "KWD",
                "value": 0.30754
            },
            "KYD": {
                "code": "KYD",
                "value": 0.833004
            },
            "KZT": {
                "code": "KZT",
                "value": 448.575164
            },
            "LAK": {
                "code": "LAK",
                "value": 17962.063992
            },
            "LBP": {
                "code": "LBP",
                "value": 15003.831221
            },
            "LKR": {
                "code": "LKR",
                "value": 294.893074
            },
            "LRD": {
                "code": "LRD",
                "value": 169.125247
            },
            "LSL": {
                "code": "LSL",
                "value": 19.710035
            },
            "LTC": {
                "code": "LTC",
                "value": 0.010631
            },
            "LTL": {
                "code": "LTL",
                "value": 2.95274
            },
            "LVL": {
                "code": "LVL",
                "value": 0.60489
            },
            "LYD": {
                "code": "LYD",
                "value": 4.828696
            },
            "MAD": {
                "code": "MAD",
                "value": 10.169667
            },
            "MATIC": {
                "code": "MATIC",
                "value": 1.127243
            },
            "MDL": {
                "code": "MDL",
                "value": 17.744579
            },
            "MGA": {
                "code": "MGA",
                "value": 4395.540298
            },
            "MKD": {
                "code": "MKD",
                "value": 57.256461
            },
            "MMK": {
                "code": "MMK",
                "value": 2099.124621
            },
            "MNT": {
                "code": "MNT",
                "value": 3473.672601
            },
            "MOP": {
                "code": "MOP",
                "value": 8.064119
            },
            "MRO": {
                "code": "MRO",
                "value": 34.300037
            },
            "MUR": {
                "code": "MUR",
                "value": 46.040083
            },
            "MVR": {
                "code": "MVR",
                "value": 15.300016
            },
            "MWK": {
                "code": "MWK",
                "value": 1026.030042
            },
            "MXN": {
                "code": "MXN",
                "value": 17.553829
            },
            "MYR": {
                "code": "MYR",
                "value": 4.613509
            },
            "MZN": {
                "code": "MZN",
                "value": 63.250085
            },
            "NAD": {
                "code": "NAD",
                "value": 19.720033
            },
            "NGN": {
                "code": "NGN",
                "value": 461.260687
            },
            "NIO": {
                "code": "NIO",
                "value": 36.562954
            },
            "NOK": {
                "code": "NOK",
                "value": 11.057491
            },
            "NPR": {
                "code": "NPR",
                "value": 131.842158
            },
            "NZD": {
                "code": "NZD",
                "value": 1.648798
            },
            "OMR": {
                "code": "OMR",
                "value": 0.385003
            },
            "PAB": {
                "code": "PAB",
                "value": 0.999624
            },
            "PEN": {
                "code": "PEN",
                "value": 3.672035
            },
            "PGK": {
                "code": "PGK",
                "value": 3.592818
            },
            "PHP": {
                "code": "PHP",
                "value": 56.081076
            },
            "PKR": {
                "code": "PKR",
                "value": 285.185891
            },
            "PLN": {
                "code": "PLN",
                "value": 4.198457
            },
            "PYG": {
                "code": "PYG",
                "value": 7270.583598
            },
            "QAR": {
                "code": "QAR",
                "value": 3.641007
            },
            "RON": {
                "code": "RON",
                "value": 4.616107
            },
            "RSD": {
                "code": "RSD",
                "value": 108.945185
            },
            "RUB": {
                "code": "RUB",
                "value": 81.000087
            },
            "RWF": {
                "code": "RWF",
                "value": 1128.438319
            },
            "SAR": {
                "code": "SAR",
                "value": 3.750242
            },
            "SBD": {
                "code": "SBD",
                "value": 8.334181
            },
            "SCR": {
                "code": "SCR",
                "value": 14.013862
            },
            "SDG": {
                "code": "SDG",
                "value": 601.000768
            },
            "SEK": {
                "code": "SEK",
                "value": 10.808963
            },
            "SGD": {
                "code": "SGD",
                "value": 1.347303
            },
            "SHP": {
                "code": "SHP",
                "value": 1.216751
            },
            "SLL": {
                "code": "SLL",
                "value": 19750.035902
            },
            "SOL": {
                "code": "SOL",
                "value": 0.048849
            },
            "SOS": {
                "code": "SOS",
                "value": 568.500888
            },
            "SRD": {
                "code": "SRD",
                "value": 37.828075
            },
            "STD": {
                "code": "STD",
                "value": 20697.981008
            },
            "SVC": {
                "code": "SVC",
                "value": 8.746352
            },
            "SYP": {
                "code": "SYP",
                "value": 2512.509186
            },
            "SZL": {
                "code": "SZL",
                "value": 19.771248
            },
            "THB": {
                "code": "THB",
                "value": 34.590042
            },
            "TJS": {
                "code": "TJS",
                "value": 10.920625
            },
            "TMT": {
                "code": "TMT",
                "value": 3.500005
            },
            "TND": {
                "code": "TND",
                "value": 3.090754
            },
            "TOP": {
                "code": "TOP",
                "value": 2.381403
            },
            "TRY": {
                "code": "TRY",
                "value": 20.895239
            },
            "TTD": {
                "code": "TTD",
                "value": 6.765524
            },
            "TWD": {
                "code": "TWD",
                "value": 30.597831
            },
            "TZS": {
                "code": "TZS",
                "value": 2365.0029
            },
            "UAH": {
                "code": "UAH",
                "value": 36.918664
            },
            "UGX": {
                "code": "UGX",
                "value": 3749.637866
            },
            "USD": {
                "code": "USD",
                "value": 1
            },
            "UYU": {
                "code": "UYU",
                "value": 38.737861
            },
            "UZS": {
                "code": "UZS",
                "value": 11404.795072
            },
            "VEF": {
                "code": "VEF",
                "value": 2628246.311577
            },
            "VND": {
                "code": "VND",
                "value": 23486.523782
            },
            "VUV": {
                "code": "VUV",
                "value": 120.344351
            },
            "WST": {
                "code": "WST",
                "value": 2.739977
            },
            "XAF": {
                "code": "XAF",
                "value": 612.297989
            },
            "XAG": {
                "code": "XAG",
                "value": 0.041879
            },
            "XAU": {
                "code": "XAU",
                "value": 0.000506
            },
            "XCD": {
                "code": "XCD",
                "value": 2.702553
            },
            "XDR": {
                "code": "XDR",
                "value": 0.750674
            },
            "XOF": {
                "code": "XOF",
                "value": 612.298208
            },
            "XPD": {
                "code": "XPD",
                "value": 0.000714
            },
            "XPF": {
                "code": "XPF",
                "value": 112.200214
            },
            "XPT": {
                "code": "XPT",
                "value": 0.00099
            },
            "XRP": {
                "code": "XRP",
                "value": 1.978579
            },
            "YER": {
                "code": "YER",
                "value": 250.350483
            },
            "ZAR": {
                "code": "ZAR",
                "value": 19.625929
            },
            "ZMK": {
                "code": "ZMK",
                "value": 9001.2
            },
            "ZMW": {
                "code": "ZMW",
                "value": 19.517173
            },
            "ZWL": {
                "code": "ZWL",
                "value": 321.999592
            }
        }
    },
    selectedCurrencyPairs: [
        {
            firstcode: 'USD',
            secondcode: 'RUB',
            defaultValueF:1,
            defaultValueS:81,
        },
        {
            firstcode: 'EUR',
            secondcode: 'RUB',
            defaultValueF:1,
            defaultValueS:87,
        },
    ],

};

const exchange_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EXCHANGE_RATES:
            return {
                ...state,
                exchangeRates: action.exchangeRates
            }

        case SET_SELECTED_CURRENCY_PAIRS:
            return {
                ...state,
                selectedCurrencyPairs: [...state.selectedCurrencyPairs, action.selectedCurrencyPairs]
            }

        case REMOVE_CURRENCY_PAIRS:
            return {...state,
                selectedCurrencyPairs: state.selectedCurrencyPairs.filter((item, index) => index !== action.keyNumber)}

        case UPDATE_CURRENCY_PAIRS:
            //console.log(action.indexDefaultValue[1])
            state.selectedCurrencyPairs[action.indexDefaultValue[0]] = action.indexDefaultValue[1]
            //debugger;
            return {...state}


        default:
            return state;
    }
};

export const setExchangeRates = (exchangeRates) => ({type: SET_EXCHANGE_RATES, exchangeRates});
export const setSelectedCurrencyPairs = (selectedCurrencyPairs) => ({
    type: SET_SELECTED_CURRENCY_PAIRS,
    selectedCurrencyPairs
});
export const removeCurrencyPairs = (keyNumber) => ({type: REMOVE_CURRENCY_PAIRS, keyNumber});
export const updateCurrencyPairs = (indexDefaultValue) => ({type: UPDATE_CURRENCY_PAIRS, indexDefaultValue});


export const handleExchangeRates = () => {
    return (dispatch) => {
        fetchExchangeRates.fromCurrencyapi().then(data => {
            dispatch(setExchangeRates(data));
        }).catch(err => {
                console.log(err)
            }
        );
    }
}


export default exchange_reducer;