import React from 'react';
import s from "./AddCurrencyPair.module.css";
import RUB from "./../../../assistive/RUB.png"
import EUR from "./../../../assistive/EUR.png"
import USD from "./../../../assistive/USD.png"


export function AddCurrencyPair(props) {

    function addCurrencyPair(e) {
        e.preventDefault();
        const firstTarget = e.target.first.value;
        const secondTarget = e.target.second.value;
        let baseFirst = props.base[firstTarget]
        let baseSecond = props.base[secondTarget]
        let firstCurrencyValue = 1
        let secondCurrencyValue = Math.round(baseSecond.value / baseFirst.value * 1000) / 1000;

        props.setSelectedCurrencyPairs({
            firstcode: firstTarget,
            secondcode: secondTarget,
            defaultValueF: firstCurrencyValue,
            defaultValueS: secondCurrencyValue,
        });
    }
let fl;
    function addFlag(e) {
        console.log(e.target.value)
        let flag2 = {
            "RUB": "RU",
            "USD": "US",
            "EUR": "EU",
            "BYR": "BY",
        }
        fl= <img src={`https://flagsapi.com/${flag2[e.target.value]}/flat/24.png`}/>
    }

    return <form className={s.currency_pair__line} id="form" onSubmit={addCurrencyPair}>
        <div className={s.line__remove}></div>
        <select name='first' onChange={(e)=> {
            addFlag(e)
        }}>
            <option selected value="USD">USD</option>
            <option value="RUB">RUB</option>
            <option value="EUR">EUR</option>
            <option value="BYR">BYR</option>
        </select>
        <div className={s.label_harr}>&harr;</div>
        <div className={s.line__remove}>{/*<img src={RUB}/>*/}</div>
        <select name='second'>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option selected value="RUB">RUB</option>
            <option value="BYR">BYR</option>
        </select>
        <div className={s.line__add}>
            <button className={s.button_add} type="submit" title='Добавить'></button>
        </div>
    </form>

}