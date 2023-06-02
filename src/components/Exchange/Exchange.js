import React from "react";
import {connect} from "react-redux";
import {handleExchangeRates, setSelectedCurrencyPairs} from "../../redux/exchange_reducer";
import {CurrencyPair} from "./CurrencyPair";

//import s from "./Exchange.module.css";


class Exchange extends React.Component {
    componentDidMount() {
        //this.props.handleExchangeRates();
    }


    render() {
        if (!!this.props.getExchangeRates.data) {
            let base_usdrub = this.props.getExchangeRates.data.RUB;
            let usdrub = this.props.getExchangeRates.data.USD;
            let eurrub = this.props.getExchangeRates.data.EUR;
            let kztrub = this.props.getExchangeRates.data.KZT;

            console.log(this.props.getSelectedCurrencyPairs)

            return (<>
                    <div>Курс валют</div>
                    <div>на 02.06.2023</div>
                    <CurrencyPair currencyPair={usdrub} base_usdrub={base_usdrub} setSelectedCurrencyPairs={this.props.setSelectedCurrencyPairs}/>
                    <CurrencyPair currencyPair={eurrub} base_usdrub={base_usdrub} setSelectedCurrencyPairs={this.props.setSelectedCurrencyPairs}/>
                    <CurrencyPair currencyPair={kztrub} base_usdrub={base_usdrub} setSelectedCurrencyPairs={this.props.setSelectedCurrencyPairs}/>
                    <CurrencyPair currencyPair={base_usdrub} base_usdrub={kztrub} setSelectedCurrencyPairs={this.props.setSelectedCurrencyPairs}/>
                    <div>+add</div>
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

let resultConnecting = connect(mapStateToProps, {handleExchangeRates, setSelectedCurrencyPairs})(Exchange);

export default resultConnecting;