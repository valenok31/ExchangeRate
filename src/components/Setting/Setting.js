import React from "react";
import {connect} from "react-redux";
//import s from "./Setting.module.css";


class Setting extends React.Component {

    render() {

        return (<>
                <div>Setting</div>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return ({

    })
};

let resultConnecting = connect(mapStateToProps, {})(Setting);

export default resultConnecting;