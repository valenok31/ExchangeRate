import s from './App.module.css'
import {Link, Route, Routes} from 'react-router-dom';
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Exchange from "./components/Exchange/Exchange";
import Setting from "./components/Setting/Setting";
import setting from "./assistive/setting.png"

class App extends React.Component {

  render() {
    return (<div className={s.app__container}>

          <div>
            <Routes>
              <Route path='/' element={<Exchange/>}/>
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
