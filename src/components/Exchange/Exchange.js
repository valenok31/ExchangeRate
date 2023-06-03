import React from "react";
import {connect} from "react-redux";
import {
    handleExchangeRates,
    removeCurrencyPairs,
    setSelectedCurrencyPairs,
    updateCurrencyPairs
} from "../../redux/exchange_reducer";
import {CurrencyPair} from "./CurrencyPair";
import {AddCurrencyPair} from "./AddCurrencyPair";

//import s from "./Exchange.module.css";


class Exchange extends React.Component {
    componentDidMount() {
        //this.props.handleExchangeRates();
    }



    render() {
        if (!!this.props.getExchangeRates.data) {
            let base = this.props.getExchangeRates.data;
            let arrCurrency = this.props.getSelectedCurrencyPairs;
            console.log(arrCurrency)
            let arrCurrencyPair = arrCurrency.map((currency,i) => {
                return <CurrencyPair key={i} keyNumber={i}
                                     currencyPair={currency}
                                     base={base}
                                     removeCurrencyPairs={this.props.removeCurrencyPairs}
                                     updateCurrencyPairs={this.props.updateCurrencyPairs}/>
            })
            return (<>
                    <div>Курс валют</div>
                    <div>на 02.06.2023</div>
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
    updateCurrencyPairs,
})(Exchange);

export default resultConnecting;