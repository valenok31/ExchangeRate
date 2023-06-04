import React, {useEffect} from 'react';
import {useFormik} from "formik";
import s from "./CurrencyPair.module.css";

export function CurrencyPair(props) {
    //let name_first = `firstCurrency_${props.keyNumber}`
    //let name_second = `secondCurrency_${props.keyNumber}`
    let t = 0;
    let firstCurrency = props.currencyPair.firstcode;
    let secondCurrency = props.currencyPair.secondcode;
    let defaultValue = props.currencyPair.defaultValueF;
    let baseFirst = props.base[firstCurrency]
    let baseSecond = props.base[secondCurrency]


    let firstCurrencyValue = 1
    let secondCurrencyValue = baseSecond.value / baseFirst.value
    let v_s = Math.round(props.currencyPair.defaultValueS * 1000) / 1000

    function onChangeValueFirstCurrency(e) {
        console.log(String(e.target.value))
       // if (String(e.target.value).slice(-1) !== '.') {
            let currency = {
                firstcode: firstCurrency,
                secondcode: secondCurrency,
                defaultValueF: String(e.target.value),
                defaultValueS: Math.round(e.target.value * secondCurrencyValue * 100) / 100,
            }
            props.updateCurrencyPairs([props.keyNumber, currency])
            props.removeCurrencyPairs(-1);
       // }

    }

    function onChangeValueSecondCurrency(e) {
       // if (String(e.target.value).slice(-2,-1) !== '.') {
            let currency = {
                firstcode: firstCurrency,
                secondcode: secondCurrency,
                defaultValueF: Math.round(e.target.value * 100 / secondCurrencyValue) / 100,
                defaultValueS: String(e.target.value),
                //defaultValue: Math.round(e.target.value * 100000 / secondCurrencyValue) / 100000,
            }
            props.updateCurrencyPairs([props.keyNumber, currency])
            props.removeCurrencyPairs(-1);
            console.log(e.target.value)
       // } else {
            //console.log(e.target.value)
            t = '.'
            //v_s = String(e.target.value)
            console.log(String(e.target.value).slice(-2,-1))
       // }
    }


    return <>
        <form>
            <input id="firstCurrency"
                   name="firstCurrency"
                   type="text"
                   onChange={onChangeValueFirstCurrency}
                   value={props.currencyPair.defaultValueF}
            />
            <label htmlFor="firstCurrency">
                {firstCurrency}</label>

            <input id="secondCurrency"
                   name="secondCurrency"
                   type="text"
                   onChange={onChangeValueSecondCurrency}
                   value={props.currencyPair.defaultValueS}
            />
            <label htmlFor="secondCurrency"> {secondCurrency}</label>
        </form>
    </>

}