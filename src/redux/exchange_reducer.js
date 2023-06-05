import {fetchExchangeRates} from "../api/api_currencyapi";
import {initialStateLibrary} from "./initialStateLibrary"

const SET_EXCHANGE_RATES = 'SET_EXCHANGE_RATES';
const SET_SELECTED_CURRENCY_PAIRS = 'SET_SELECTED_CURRENCY_PAIRS';
const REMOVE_CURRENCY_PAIRS = 'REMOVE_CURRENCY_PAIRS';
const UPDATE_CURRENCY_PAIRS = 'UPDATE_CURRENCY_PAIRS';
const SET_CURRENCY_SYMBOL = 'SET_CURRENCY_SYMBOL';

const initialState = initialStateLibrary;

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
            return {
                ...state,
                selectedCurrencyPairs: state.selectedCurrencyPairs.filter((item, index) => index !== action.keyNumber)
            }

        case UPDATE_CURRENCY_PAIRS:
            state.selectedCurrencyPairs[action.indexDefaultValue[0]] = action.indexDefaultValue[1]
            return {...state}

        case SET_CURRENCY_SYMBOL:
            return {
                ...state,
                currencySymbol: action.currencySymbol
            }

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
export const setCurrencySymbol = (currencySymbol) => ({type: SET_CURRENCY_SYMBOL, currencySymbol});


export const handleExchangeRates = () => {
    return (dispatch) => {
        fetchExchangeRates.fromCurrencyapiLatest().then(data => {
            dispatch(setExchangeRates(data));
        }).catch(err => {
                console.log(err)
            }
        );
    }
}

export const handleCurrencySymbol = () => {
    return (dispatch) => {
        fetchExchangeRates.fromCurrencyapiCurrencies().then(data => {
            dispatch(setCurrencySymbol(data));
        }).catch(err => {
                console.log(err)
            }
        );
    }
}

export default exchange_reducer;