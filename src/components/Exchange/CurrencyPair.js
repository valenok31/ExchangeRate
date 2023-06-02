import React from 'react';
import {useFormik} from "formik";


export function CurrencyPair(props) {

    let base_usdrub = props.base_usdrub.value;
    let currencyPair = props.currencyPair.value;
    let setSelectedCurrencyPairs = props.setSelectedCurrencyPairs;

    const formik = useFormik({
        initialValues: {
            baseCurrency: 1,
            baseExchangeRate: base_usdrub / currencyPair,
            exchangeRate: base_usdrub / currencyPair,
        },

        onSubmit: values => {
            //console.log('true');
            setSelectedCurrencyPairs({
                first_currency:{values:formik.values.baseCurrency, code: props.currencyPair.code},
                second_currency:{values:(formik.values.baseExchangeRate * formik.values.baseCurrency).toFixed(2), code: props.base_usdrub.code}});
        },

    });
    return <form onSubmit={formik.handleSubmit}>

        <input id="baseCurrency"
               name="baseCurrency"
               type="text"
               onChange={formik.handleChange}
               value={formik.values.baseCurrency}
        />
        <label htmlFor="baseCurrency">{props.currencyPair.code} - </label>
        <button type="submit">обратить</button>
        <label
            htmlFor="exchangeRate">
            {(formik.values.baseExchangeRate * formik.values.baseCurrency).toFixed(2)}
            {props.base_usdrub.code}</label>

    </form>

}