import React from "react";

export default class Lineup extends React.Component {
    
    /** @param {{resultUrl: string, locationUrl: string, lineupUrl: string, description: string}} props */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex">
                <img className="img img-fluid" src={this.props.resultUrl} />
                <div className="w-100 d-flex">
                    <img className="w-50 img img-fluid" src={this.props.locationUrl} />
                    <img className="w-50 img img-fluid" src={this.props.lineupUrl} />
                </div>
                <div>{this.props.description}</div>
            </div>
        );
    }
}