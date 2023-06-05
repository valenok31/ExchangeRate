import React from 'react';
import s from "./CurrencyPair.module.css";

export function CurrencyPair(props) {
    let getSymbol = props.getSymbol;
    let firstCurrency = props.currencyPair.firstcode;
    let secondCurrency = props.currencyPair.secondcode;
    let baseFirst = props.base[firstCurrency]
    let baseSecond = props.base[secondCurrency]
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
    }

    return <form>
        <input id="firstCurrency"
               name="firstCurrency"
               type="text"
               onChange={onChangeValueFirstCurrency}
               value={props.currencyPair.defaultValueF}
        />
        <label title={getSymbol[firstCurrency]?.name}>{getSymbol[firstCurrency]?.symbol_native}</label>
        <div className={s.label_harr}>&harr;</div>
        <input id="secondCurrency"
               name="secondCurrency"
               type="text"
               onChange={onChangeValueSecondCurrency}
               value={props.currencyPair.defaultValueS}
        />
        <label title={getSymbol[secondCurrency]?.name}>{getSymbol[secondCurrency]?.symbol_native}</label>
    </form>

}