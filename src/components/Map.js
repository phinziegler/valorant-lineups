import React from "react";
import Agents from "../Agents";
import Maps from "../Maps";
import Viper from "./Viper";

/**
 * PROPS CONTAIN A MAP
 */
export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            agent: "",
            scale: 100
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
                return <Viper map={this.props.map} />;
            default:
                return <></>;
        }
    }

    render() {
        return (
            <>
                <div>Select an agent</div>
                {this.agentSelect()}
                <div>Scale</div>
                <input type="range" onChange={(e) => this.setState({ scale: e.target.value })} step={1} min={0} max={100} value={this.state.scale}></input>
                <div style={{maxWidth: `${this.state.scale}%`}} className="page-content">
                    {this.renderAgent(this.state.agent)}
                </div>
            </>

        )
    }

}