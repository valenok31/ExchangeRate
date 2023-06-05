import React from 'react';
import s from "./AddCurrencyPair.module.css";

export function AddCurrencyPair(props) {

    let getSymbol = props.getSymbol;

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

    let selectOptionCurrency = [];
    for (let currency in props.base) {
        selectOptionCurrency.push(
            <option value={currency} title={getSymbol[currency]?.name}>
                {getSymbol[currency]?.symbol_native} - {getSymbol[currency]?.name}
            </option>
        );
    }

    return <form className={s.currency_pair__line} id="form" onSubmit={addCurrencyPair}>
        <div className={s.line__remove}></div>
        <select name='first'>
            <option selected value={"USD"}
                    title={getSymbol["USD"]?.name}>{getSymbol["USD"]?.symbol_native} - {getSymbol["USD"]?.name}</option>
            <option value={"EUR"}
                    title={getSymbol["EUR"]?.name}>{getSymbol["EUR"]?.symbol_native} - {getSymbol["EUR"]?.name}</option>
            <option value={"RUB"}
                    title={getSymbol["RUB"]?.name}>{getSymbol["RUB"]?.symbol_native} - {getSymbol["RUB"]?.name}</option>
            <option value="---" disabled={true}>---</option>
            {selectOptionCurrency}
        </select>
        <div className={s.label_harr}>&harr;</div>
        <div className={s.line__remove}></div>
        <select name='second'>
            <option value={"USD"}
                    title={getSymbol["USD"]?.name}>{getSymbol["USD"]?.symbol_native} - {getSymbol["USD"]?.name}</option>
            <option value={"EUR"}
                    title={getSymbol["EUR"]?.name}>{getSymbol["EUR"]?.symbol_native} - {getSymbol["EUR"]?.name}</option>
            <option selected value={"RUB"}
                    title={getSymbol["RUB"]?.name}>{getSymbol["RUB"]?.symbol_native} - {getSymbol["RUB"]?.name}</option>
            <option value="---" disabled={true}>---</option>
            {selectOptionCurrency}
        </select>
        <div className={s.line__add}>
            <button className={s.button_add} type="submit" title='Добавить'></button>
        </div>
    </form>

}