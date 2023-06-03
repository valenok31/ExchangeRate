import React from "react";
import {connect} from "react-redux";
import {
    handleExchangeRates,
    removeCurrencyPairs,
    setSelectedCurrencyPairs,
} from "../../redux/exchange_reducer";
import {CurrencyPair} from "./CurrencyPair";
import {AddCurrencyPair} from "./AddCurrencyPair";
import {dateConverter} from "../accessoryFunctions/dateСonverter";

//import s from "./Exchange.module.css";


class Exchange extends React.Component {
    componentDidMount() {
        //this.props.handleExchangeRates();
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

            console.log(arrCurrency)
            let arrCurrencyPair = arrCurrency.map((currency, i) => {
                return <form onSubmit={(evt) => {
                    onRemoveCurrencyPairs(i, evt)
                }}>
                    <CurrencyPair key={i}
                                  currencyPair={currency}
                                  base={base}/>
                    {arrCurrency.length-1==i ? <button type='submit'>Delete</button> : <div></div>}

                </form>
            })

            let date = new Date(Date.parse(this.props.getExchangeRates.meta.last_updated_at));

            return (<>
                    <div>Курс валют</div>
                    <div>{dateConverter(date, true)}</div>
                    {arrCurrencyPair}
                    <AddCurrencyPair setSelectedCurrencyPairs={this.props.setSelectedCurrencyPairs}/>
                </>
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