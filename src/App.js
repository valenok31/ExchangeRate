import s from './App.module.css'
import {Link, Route, Routes} from 'react-router-dom';
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import MainPage from "./components/MainPage/MainPage";
import Exchange from "./components/Exchange/Exchange";
import Calculator from "./components/Calculator/Calculator";
import Setting from "./components/Setting/Setting";


class App extends React.Component {

  render() {
    return (<div className={s.app__header}>
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/exchange">Курс валют</Link>
              </li>
              <li>
                <Link to="/calculator">Калькулятор</Link>
              </li>
              <li>
                <Link to="/setting">Настройки</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Routes>
              <Route path='/' element={<MainPage />}/>
              <Route path='/exchange' element={<Exchange/>}/>
              <Route path='/calculator' element={<Calculator/>}/>
              <Route path='/setting' element={<Setting/>}/>
            </Routes>
          </div>
        </div>
    )
  }
}

let mapStateToProps = (state) => ({
  getSettings: state.exchange_reducer.settings,
});

export default compose(
    connect(mapStateToProps, {}))
(App);
