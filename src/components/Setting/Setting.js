import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import setting from "../../assistive/setting.png";
//import s from "./Setting.module.css";


class Setting extends React.Component {

    render() {

        return (<>
                <nav>
                    <Link to="/">Назад к Курсам валют</Link>
                </nav>
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