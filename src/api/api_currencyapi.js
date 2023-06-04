import React from "react";
import axios from 'axios';

const errData = {
    "meta": {
        "last_updated_at": "2023-06-01T23:59:59Z"
    },
    "data": {
        "ADA": {
            "code": "ADA",
            "value": 2.744225
        },
        "BYR": {
            "code": "BYR",
            "value": 19600
        },
        "EUR": {
            "code": "EUR",
            "value": 0.929332
        },
        "RUB": {
            "code": "RUB",
            "value": 81.000087
        },
        "USD": {
            "code": "USD",
            "value": 1
        },
    }
};


export const fetchExchangeRates = {

    fromCurrencyapiLatest() {
        const requestExchangeRates = axios.create({
            baseURL: `https://api.currencyapi.com/v3/`,
        })
        return requestExchangeRates.get(`latest?apikey=gC8AnYhjAJRR4PSBXWR4x157wuTnvsxzpqJn8Yrh`)
            .then(response => {
                //console.log(response.data)
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
        return requestExchangeRates.get(`currencies?currencies=USD,EUR,RUB,BYR&apikey=gC8AnYhjAJRR4PSBXWR4x157wuTnvsxzpqJn8Yrh`)
            .then(response => {
                //console.log(response.data)
                return response.data;
            })
            .catch((err) => {
                // TODO: response in case of error
                console.log('no data')
                return errData;
            })
    },

}

export const fetchIp = {
    fromCurrent() {
        return axios.get('https://ipapi.co/json/')
            .then(response => {
                return response.data;
            })
            .catch((err) => {
                // TODO: response in case of error
                console.log('no data')
            })
    },
}

