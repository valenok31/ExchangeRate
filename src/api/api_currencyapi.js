import React from "react";
import axios from 'axios';

const errData = {};


export const fetchExchangeRates = {
    fromCurrencyapi() {
        const requestExchangeRates = axios.create({
            baseURL: `https://api.currencyapi.com/v3/`,
        })
        return requestExchangeRates.get(`latest?apikey=gC8AnYhjAJRR4PSBXWR4x157wuTnvsxzpqJn8Yrh`)
            .then(response => {
                console.log(response.data)
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

