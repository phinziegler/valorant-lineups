import React from "react";
import { Link, Outlet } from "react-router-dom";
import Maps from "../Maps";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reroute: ""
        }
    }

    render() {
        return (
            <>
            <div>Select a map</div>
                <Link className="btn btn-primary" to={Maps.ICEBOX}>{Maps.ICEBOX}</Link>
                <Outlet></Outlet>
            </>

        )
    }

}