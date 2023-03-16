import React from "react";
import Maps from "../Maps";
import Lineup from "./Lineup";

export default class Viper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLocation: true
        }
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
                <label>
                    Show locations
                    <input className="mx-1" onChange={() => this.setState({showLocation: !this.state.showLocation})} checked={this.state.showLocation} type="checkbox" />
                </label>
                <ul className="list-group darkened p-5">
                    <h2>Attack</h2>
                    <Lineup
                        resultUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/Default%20Molly%20A.png"
                        locationUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/A%20Default%20Lineup%20(P1).png"
                        lineupUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/A%20Default%20Lineup(P2).png"
                        description="Shoot without moving. Afterwards you can run up the ramp to peak just as the molly applies vulnerability." 
                        showloc={() => this.state.showLocation} />
                    <Lineup
                        resultUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/Cat%20and%20Backsite%20smoke.png"
                        locationUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/A%20Default%20Lineup%20(P1).png"
                        lineupUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/Cat%20and%20backsite%20smoke%20lineup.png"
                        description="Run, jump, and left-click. This smoke covers vision for anyone on cat, and blocks some backsite angles." 
                        showloc={() => this.state.showLocation} />
                    <Lineup
                        resultUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/Mid%20Smoke%20Result.png"
                        locationUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/Mid%20Smoke%20Loc.png"
                        lineupUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Attack/Mid%20Smoke%20Lineup.jpg"
                        description="Standing left-click. Smokes off vision from the rafters and under kitchen."
                        showloc={() => this.state.showLocation} />

                    <h2>Defense</h2>
                    <Lineup
                        resultUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Defend/Defense%20Wall.png"
                        locationUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Defend/Defense%20Wall%20P1.png"
                        lineupUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Defend/Defense%20Wall%20P2.jpg"
                        description="Walls off the entrance to B site, and makes post plant harder for attackers."
                        showloc={() => this.state.showLocation} />
                    <Lineup
                        resultUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Defend/B%20One%20way%20Result.png"
                        locationUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Defend/B%20One%20Way%20(P1).png"
                        lineupUrl="https://raw.githubusercontent.com/phinziegler/valorant-lineups/master/public/Maps/Icebox/Viper/Defend/B%20One%20Way%20(P2%2C%20Jump%20then%20right%20click%20quickly).png"
                        description="Jump and right-click at the same time. Creates a one way on attackers moving towards yellow or site."
                        showloc={() => this.state.showLocation} />
                </ul>
            </div>

        )
    }

    render() {
        return (
            <div>
                {this.renderMap()}
            </div>
        );
    }
}