import React from "react";
import {connect} from "react-redux";
import {
    handleExchangeRates,
    removeCurrencyPairs,
    setSelectedCurrencyPairs,
} from "../../redux/exchange_reducer";
import {CurrencyPair} from "./CurrencyPair/CurrencyPair";
import {AddCurrencyPair} from "./AddCurrencyPair/AddCurrencyPair";
import {dateConverter} from "../accessoryFunctions/dateСonverter";
import s from "./Exchange.module.css";


class Exchange extends React.Component {
    componentDidMount() {
       // this.props.handleExchangeRates();
    }

    render() {
        if (!!this.props.getExchangeRates.data) {
            let base = this.props.getExchangeRates.data;
            let arrCurrency = this.props.getSelectedCurrencyPairs;
            let removeCurrencyPairs = this.props.removeCurrencyPairs;

            function onRemoveCurrencyPairs(i, evt) {
                evt.preventDefault();
                removeCurrencyPairs(i);
            }

            let arrCurrencyPair = arrCurrency.map((currency, i) => {
                return <form key={i} onSubmit={(evt) => {
                    onRemoveCurrencyPairs(i, evt)
                }}>
                    <CurrencyPair keyNumber={i}
                                  currencyPair={currency}
                                  base={base}/>
                    {arrCurrency.length - 1 == i ? <button type='submit'>Delete</button> : <div></div>}

                </form>
            })

            let date = new Date(Date.parse(this.props.getExchangeRates.meta.last_updated_at));

            return (<div className={s.box}>
                    <h1>Курс валют</h1>
                    <div className={s.box__date}>{dateConverter(date, true)}</div>
                    <div className={s.box__currency}>{arrCurrencyPair}</div>
                    <div className={s.box__add_currency}><AddCurrencyPair
                        setSelectedCurrencyPairs={this.props.setSelectedCurrencyPairs}/></div>
                </div>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return ({
        getExchangeRates: state.exchange_reducer.exchangeRates,
        getSelectedCurrencyPairs: state.exchange_reducer.selectedCurrencyPairs,
    })
};

let resultConnecting = connect(mapStateToProps, {
    handleExchangeRates,
    setSelectedCurrencyPairs,
    removeCurrencyPairs,
})(Exchange);

export default resultConnecting;