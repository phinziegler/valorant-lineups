import React from "react";
import Maps from "../Maps";

export default class Viper extends React.Component {
    constructor(props) {
        super(props);
    }

    renderMap() {
        switch(this.props.map) {
            case Maps.ICEBOX:
                return this.icebox();
        }
    }

    icebox() {
        return (
            <div>This is the icebox lineups</div>
        )
    }

    render() {
        return this.renderMap();
    }
}