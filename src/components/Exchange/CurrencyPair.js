import React, {useEffect} from 'react';
import {useFormik} from "formik";


export function CurrencyPair(props) {


    let firstCurrency = props.currencyPair.firstcode;
    let secondCurrency = props.currencyPair.secondcode;
    let defaultValue = props.currencyPair.defaultValue;
    let baseFirst = props.base[firstCurrency]
    let baseSecond = props.base[secondCurrency]


    let firstCurrencyValue = 1
    let secondCurrencyValue = baseSecond.value / baseFirst.value

    function changeValueFirstCurrency(props) {
        formik.values.secondCurrency = Math.round(secondCurrencyValue * 100 * formik.values.firstCurrency) / 100;


    }

    function changeValueSecondCurrency(props) {
        formik.values.firstCurrency = Math.round(formik.values.secondCurrency * 100 / secondCurrencyValue) / 100;

    }

    const formik = useFormik({
        initialValues: {
            baseCurrency: 1,
            firstCurrency: 1,
            secondCurrency: Math.round(secondCurrencyValue * 100) / 100,
        },
        onSubmit: values => {
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
        </form>
    </>

}