import React from "react";
import Maps from "../Maps";
import Lineup from "./Lineup";

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
            <>
                <h2>Default Molly</h2>
                <Lineup 
                    resultUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/A/A%20Default%20Molly/A%20Default%20Lineup%20(P1).png"
                    locationUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/A/A%20Default%20Molly/A%20Default%20Lineup%20(P1).png" 
                    lineupUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/A/A%20Default%20Molly/A%20Default%20Lineup(P2).png"
                    description="Stand still and shoot" />
            </>

        )
    }

    render() {
        return this.renderMap();
    }
}