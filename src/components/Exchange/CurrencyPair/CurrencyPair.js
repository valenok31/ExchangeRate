import React, {useEffect} from 'react';
import {useFormik} from "formik";
import s from "./CurrencyPair.module.css";
import {setLocalStorage} from "../../accessoryFunctions/setLocalStorage";

export function CurrencyPair(props) {
    let name_first = `firstCurrency_${props.keyNumber}`
    let name_second = `secondCurrency_${props.keyNumber}`
    let getSymbol = props.getSymbol;
    let firstCurrency = props.currencyPair.firstcode;
    let secondCurrency = props.currencyPair.secondcode;
    let defaultValue = props.currencyPair.defaultValueF;
    let baseFirst = props.base[firstCurrency]
    let baseSecond = props.base[secondCurrency]


    let firstCurrencyValue = 1
    let secondCurrencyValue = baseSecond.value / baseFirst.value

    function onChangeValueFirstCurrency(e) {
        let currency = {
            firstcode: firstCurrency,
            secondcode: secondCurrency,
            defaultValueF: String(e.target.value),
            defaultValueS: Math.round(e.target.value * secondCurrencyValue * 100) / 100,
        }
        props.updateCurrencyPairs([props.keyNumber, currency])
        props.removeCurrencyPairs(-1);
        //setLocalStorage(props.allCurrency);
    }

    function onChangeValueSecondCurrency(e) {
        let currency = {
            firstcode: firstCurrency,
            secondcode: secondCurrency,
            defaultValueF: Math.round(e.target.value * 100 / secondCurrencyValue) / 100,
            defaultValueS: String(e.target.value),
        }
        props.updateCurrencyPairs([props.keyNumber, currency])
        props.removeCurrencyPairs(-1);
        //setLocalStorage(props.allCurrency);
    }


    return <form>
            <input id="firstCurrency"
                   name="firstCurrency"
                   type="text"
                   onChange={onChangeValueFirstCurrency}
                   value={props.currencyPair.defaultValueF}
            />
            <label>{getSymbol[firstCurrency]}</label>
<div className={s.label_harr}>&harr;</div>
            <input id="secondCurrency"
                   name="secondCurrency"
                   type="text"
                   onChange={onChangeValueSecondCurrency}
                   value={props.currencyPair.defaultValueS}
            />
            <label>{getSymbol[secondCurrency]}</label>
        </form>

}