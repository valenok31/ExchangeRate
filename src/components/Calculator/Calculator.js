import React from "react";
import {connect} from "react-redux";
//import s from "./Calculator.module.css";


class Calculator extends React.Component {

    render() {

        return (<>
                <div>Calculator</div>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return ({

    })
};

let resultConnecting = connect(mapStateToProps, {})(Calculator);

export default resultConnecting;