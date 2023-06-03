import React from 'react';
import s from "./AddCurrencyPair.module.css";


export function AddCurrencyPair(props) {
    function addCurrencyPair(e) {
        e.preventDefault();
        const firstTarget = e.target.first.value;
        const secondTarget = e.target.second.value;
        props.setSelectedCurrencyPairs({
            firstcode: firstTarget,
            secondcode: secondTarget,
            defaultValue: 1,
        });
    }

    return <form id="form" onSubmit={addCurrencyPair}>
        <select name='first'>
            <option selected value="USD">USD</option>
            <option value="RUB">RUB</option>
            <option value="EUR">EUR</option>
            <option value="BYR">BYR</option>
        </select>
        <select name='second'>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option selected value="RUB">RUB</option>
            <option value="BYR">BYR</option>
        </select>
        <button type="submit">Добавить</button>
    </form>

}