import React from "react";
import axios from 'axios';
import {initialStateLibrary} from "../redux/initialStateLibrary";

const errData = initialStateLibrary.exchangeRates;

export const fetchExchangeRates = {

    fromCurrencyapiLatest() {
        const requestExchangeRates = axios.create({
            baseURL: `https://api.currencyapi.com/v3/`,
        })
        return requestExchangeRates.get(`latest?apikey=3MPxpTIWTi95Y96mZkFwrFWVQLgiVal7seJt85Zp`)
            .then(response => {
                return response.data;
            })
            .catch((err) => {
                // TODO: response in case of error
                console.log('no data')
                return errData;
            })
    },
    fromCurrencyapiCurrencies() {
        const requestExchangeRates = axios.create({
            baseURL: `https://api.currencyapi.com/v3/`,
        })
        return requestExchangeRates.get(`currencies?apikey=3MPxpTIWTi95Y96mZkFwrFWVQLgiVal7seJt85Zp`)
            .then(response => {
                return response.data;
            })
            .catch((err) => {
                // TODO: response in case of error
                console.log('no data')
                return errData;
            })
    },
}

