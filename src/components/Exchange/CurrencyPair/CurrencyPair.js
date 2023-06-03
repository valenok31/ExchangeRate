import React, {useEffect} from 'react';
import {useFormik} from "formik";
import s from "./CurrencyPair.module.css";
import {logDOM} from "@testing-library/react";

export function CurrencyPair(props) {

    let name_first = `firstCurrency_${props.keyNumber}`
    let name_second = `secondCurrency_${props.keyNumber}`

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
        validate: values => {
            const errors = {};
            if (!values.firstCurrency) {
                errors.firstCurrency = 'Не должно быть пустым!';
            } else if (!/^\d{1,}$/.test(values.firstCurrency)) {
                errors.firstCurrency ="Мы работаем только с числами";
            }

            if (!values.secondCurrency) {
                errors.secondCurrency = 'Не должно быть пустым!';
            } else if (!/^\d{1,}$/.test(values.secondCurrency)) {
                errors.secondCurrency ="Мы работаем только с числами";
            }


            console.log(errors)
            return errors;
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
                   onChange={formik.handleChange}
                   value={formik.values.firstCurrency}
            />
            <label htmlFor="firstCurrency">
                {firstCurrency}</label>

            <input id="secondCurrency"
                   name="secondCurrency"
                   type="text"
                   onChange={formik.handleChange}
                   value={formik.values.secondCurrency}
            />
            <label htmlFor="secondCurrency"> {secondCurrency}</label>
        </form>
    </>

}