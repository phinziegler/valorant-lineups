import React from "react";
import Maps from "../Maps";
import Lineup from "./Lineup";

export default class Viper extends React.Component {
    constructor(props) {
        super(props);
    }

    renderMap() {
        switch (this.props.map) {
            case Maps.ICEBOX:
                return this.icebox();
        }
    }

    icebox() {
        return (
            <div>
                <h1 className="text-center">{"Viper - " + this.props.map}</h1>
                <ul className="list-group darkened p-5">
                    <h2>Attack</h2>
                    <Lineup
                        resultUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/Default%20Molly%20A.png"
                        locationUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/A%20Default%20Lineup%20(P1).png"
                        lineupUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/A%20Default%20Lineup(P2).png"
                        description="Shoot without moving. Afterwards you can run up the ramp to peak just as the molly applies vulnerability." />
                    <Lineup
                        resultUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/Cat%20and%20Backsite%20smoke.png"
                        locationUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/A%20Default%20Lineup%20(P1).png"
                        lineupUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/Cat%20and%20backsite%20smoke%20lineup.png"
                        description="Run, jump, and left-click. This smoke covers vision for anyone on cat, and blocks some backsite angles." />
                    <h2>Defense</h2>
                    <Lineup
                        resultUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Defend/Defense%20Wall.png"
                        locationUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Defend/Defense%20Wall%20P1.png"
                        lineupUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Defend/Defense%20Wall%20P2.png"
                        description="Walls off the entrance to B site, and makes post plant harder for attackers." />
                </ul>


            </div>

        )
    }

    render() {
        return this.renderMap();
    }
}