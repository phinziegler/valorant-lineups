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
                {/* {this.state.reroute != "" && <Navigate replace to={this.state.reroute} />} */}
                <div>This is the home page</div>
                {/* <button onClick={() => this.setState({ reroute: "/icebox" })}>Icebox</button> */}
                <Link className="btn btn-primary" to={Maps.ICEBOX}>{Maps.ICEBOX}</Link>
                <Outlet></Outlet>
            </>

        )
    }

}