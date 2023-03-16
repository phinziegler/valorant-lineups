import React from "react";
import { Link, Navigate } from "react-router-dom";
import Agents from "../Agents";
import Maps from "../Maps";
import Viper from "./Viper";

export default class Icebox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            agent: "",
        }
    }

    agentButton(agent) {
        return <button onClick={() => this.setState({ agent: agent })} className="btn btn-success">{agent}</button>
    }

    agentSelect() {
        console.log("no agent selection, showing list")
        return <>
            {this.agentButton(Agents.VIPER)}
        </>
    }

    renderAgent(agent) {
        switch (agent) {
            case Agents.VIPER:
                return <Viper map={Maps.ICEBOX} />;
            default:
                return <></>;
        }
    }

    render() {
        return (
            <>
                <div>Select an agent</div>
                {this.agentSelect()}
                <div className="page-content">
                    {this.renderAgent(this.state.agent)}
                </div>
            </>

        )
    }

}