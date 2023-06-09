import React from "react";

export default class Lineup extends React.Component {

    /** @param {{resultUrl: string, locationUrl: string, lineupUrl: string, description: string, showloc: *}} props */
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            manualShowLoc: true
        }
    }

    render() {
        return (
            <div className={"my-3 d-flex flex-row w-100 " + this.props.className}>
                <div className="lineup-thumbnail pe-2">
                    <img onClick={() => this.setState({ open: !this.state.open, manualShowLoc: true })} className="img-fluid" src={this.props.resultUrl} />
                    {this.state.open && <p>{this.props.description}</p>}
                </div>
                {this.state.open && <div className="lineup-reference d-flex flex-column">
                    {(this.state.manualShowLoc && this.props.showloc()) && <img onClick={() => this.setState({manualShowLoc: false})} className="lineup-reference" src={this.props.locationUrl} />}
                    <img className="lineup-reference" src={this.props.lineupUrl} />
                </div>}
            </div>
        );
    }
}