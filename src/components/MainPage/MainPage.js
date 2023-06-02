import React from "react";
import {connect} from "react-redux";
import s from "./MainPage.module.css";


class MainPage extends React.Component {

    render() {

        return (<>
                <div>MainPage</div>
                <div>RUB-USD</div>
                <div>RUB-EUR</div>
                <div>+add</div>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return ({

    })
};

let resultConnecting = connect(mapStateToProps, {})(MainPage);

export default resultConnecting;