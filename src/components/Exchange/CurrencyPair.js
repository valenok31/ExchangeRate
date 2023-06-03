import React, {useEffect} from 'react';
import {useFormik} from "formik";


export function CurrencyPair(props) {


    let firstCurrency = props.currencyPair.firstcode;
    let secondCurrency = props.currencyPair.secondcode;
    let defaultValue = props.currencyPair.defaultValue;
    let baseFirst = props.base[firstCurrency]
    let baseSecond = props.base[secondCurrency]
    let removeCurrencyPairs=props.removeCurrencyPairs;


    let firstCurrencyValue = 1
    let secondCurrencyValue = baseSecond.value / baseFirst.value

    function changeValueFirstCurrency(props) {
        props.updateCurrencyPairs([props.keyNumber, +formik.values.firstCurrency]);
        //formik.values.secondCurrency = Math.round(secondCurrencyValue * 100 * formik.values.firstCurrency) / 100;
        formik.values.secondCurrency = Math.round(secondCurrencyValue * 10 * defaultValue) / 10;


    }

    function changeValueSecondCurrency(props) {
        props.updateCurrencyPairs([props.keyNumber, formik.values.firstCurrency]);
        formik.values.firstCurrency = Math.round(formik.values.secondCurrency * 10 / secondCurrencyValue) / 10;

    }

    const formik = useFormik({
        initialValues: {
            baseCurrency: 1,
            firstCurrency: defaultValue,
            secondCurrency: Math.round(secondCurrencyValue * 10) / 10,
        },
        onSubmit: values => {
            console.log(props.keyNumber)
            removeCurrencyPairs(props.keyNumber);
        },
    });

    useEffect(() => {
        changeValueFirstCurrency(props)
    }, [formik.values.firstCurrency])
    useEffect(() => {
        changeValueSecondCurrency(props)
    }, [formik.values.secondCurrency])


    return <>
        <form onSubmit={formik.handleSubmit}>
            <input id="firstCurrency"
                   name="firstCurrency"
                   type="text"
                   size='6'
                   onChange={formik.handleChange}
                   value={formik.values.firstCurrency}
            />
            <label htmlFor="firstCurrency">
                {firstCurrency}</label>

            <input id="secondCurrency"
                   name="secondCurrency"
                   type="text"
                   size='6'
                   onChange={formik.handleChange}
                   value={formik.values.secondCurrency}
            />
            <label htmlFor="secondCurrency"> {secondCurrency}</label>
            <button type='submit'>Delete</button>
        </form>
    </>

}