import React from "react";
import {connect} from "react-redux";
import {
    handleExchangeRates,
    removeCurrencyPairs,
    setSelectedCurrencyPairs,
    updateCurrencyPairs
} from "../../redux/exchange_reducer";
import {CurrencyPair} from "./CurrencyPair/CurrencyPair";
import {AddCurrencyPair} from "./AddCurrencyPair/AddCurrencyPair";
import {dateConverter} from "../accessoryFunctions/dateСonverter";
import s from "./Exchange.module.css";
import {setLocalStorage} from "../accessoryFunctions/setLocalStorage";


class Exchange extends React.Component {
    componentDidMount() {
        // this.props.handleExchangeRates();

        let startCurrencyPairs = [];
this.props.removeCurrencyPairs(-1);
        if (localStorage.startCurrencyPairs) {
            startCurrencyPairs = JSON.parse(localStorage.startCurrencyPairs);
        } else {
            startCurrencyPairs = this.props.getSelectedCurrencyPairs;
        }

        for (let i = 0; i < startCurrencyPairs.length; i++) {
            let startPair = startCurrencyPairs[i];
            let firstCurrency = startPair.firstcode;
            let secondCurrency = startPair.secondcode;
            let firstCurrencyStart = Number(startPair.defaultValueF);
            let baseFirst = this.props.getExchangeRates.data[firstCurrency].value
            let baseSecond = this.props.getExchangeRates.data[secondCurrency].value

            let currency = {
                firstcode: firstCurrency,
                secondcode: secondCurrency,
                defaultValueF: firstCurrencyStart,
                defaultValueS: Math.round(baseSecond * firstCurrencyStart * 100 / baseFirst) / 100,
            }
            this.props.updateCurrencyPairs([i, currency])
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevProps.getSelectedCurrencyPairs) !== JSON.stringify(this.props.getSelectedCurrencyPairs)) {
            setLocalStorage(this.props.getSelectedCurrencyPairs);
        }
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

            let arrCurrencyPair = arrCurrency.map((currency, i, allCurrency) => {
                return <form className={s.currency_pair__line} key={i} onSubmit={(evt) => {
                    onRemoveCurrencyPairs(i, evt)
                }}>
                    <div className={s.line__remove}>
                        <button type='submit' className={s.button_remove} title='Удалить'></button>
                    </div>
                    <CurrencyPair keyNumber={i}
                                  currencyPair={currency}
                                  base={base}
                                  updateCurrencyPairs={this.props.updateCurrencyPairs}
                                  allCurrency={this.props.getSelectedCurrencyPairs}
                                  removeCurrencyPairs={this.props.removeCurrencyPairs}
                                  getSymbol={this.props.getSymbol}
                    />
                </form>
            })

            let date = new Date(Date.parse(this.props.getExchangeRates.meta.last_updated_at));

            return (<div className={s.box}>
                    <h1>Курс валют</h1>
                    <div className={s.box__date}>{dateConverter(date, true)}</div>
                    <div className={s.box__currency}>{arrCurrencyPair}</div>
                    <div className={s.box__add_currency}><AddCurrencyPair
                        setSelectedCurrencyPairs={this.props.setSelectedCurrencyPairs}
                        allCurrency={this.props.getSelectedCurrencyPairs}
                        base={base}/></div>
                </div>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return ({
        getExchangeRates: state.exchange_reducer.exchangeRates,
        getSelectedCurrencyPairs: state.exchange_reducer.selectedCurrencyPairs,
        getSymbol: state.exchange_reducer.currencySymbol,
    })
};

let resultConnecting = connect(mapStateToProps, {
    handleExchangeRates,
    setSelectedCurrencyPairs,
    removeCurrencyPairs,
    updateCurrencyPairs
})(Exchange);

export default resultConnecting;