import React, { Component } from 'react';
import CurrentLocation from './CurrentLocation';
import MapContainer from './MapContainer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAddress: "46 Tabernacle Street, London EC2A 4DT",
            mapCoordinates: {
                lat: 51.523353,
                lng: -0.086016
            }
        };
        console.log("App constructor");
    }
    componentDidMount() {
        console.log("App componentDidMount");
    }

    componentDidUpdate() {
        console.log('App componentDidUpdate');
    }

    static getDerivedStateFromProps(props, state) {
        console.log("App getDerivedStateFromProps");
        console.dir(props);
        console.dir(state);
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("App getSnapshotBeforeUpdate");
        console.dir(prevProps);
        console.dir(prevState);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("App shouldComponentUpdate");
        console.dir(nextProps);
        console.dir(nextState);
        return !(JSON.stringify(nextProps) === JSON.stringify(this.props) && JSON.stringify(nextState) === JSON.stringify(this.state));
    }

    componentWillUnmount () {
        console.log("App componentWillUnmount");
    }

    render() {
        console.log("App render")
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MapContainer coords={this.state.mapCoordinates} />
                <CurrentLocation address={this.state.currentAddress}/>
            </div>
        );
    }
}

export default App;