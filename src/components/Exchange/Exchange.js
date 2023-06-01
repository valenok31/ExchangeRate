import React from "react";
import {connect} from "react-redux";
//import s from "./Exchange.module.css";


class Exchange extends React.Component {

    render() {

        return (<>
                <div>Exchange</div>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return ({

    })
};

let resultConnecting = connect(mapStateToProps, {})(Exchange);

export default resultConnecting;