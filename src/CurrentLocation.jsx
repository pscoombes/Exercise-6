import React from 'react';

class CurrentLocation extends React.Component {
    constructor(props) {
        super(props);
        console.log("CurrentLocation constructor");
        this.state = {};
    }

    componentDidMount() {
        console.log("CurrentLocation componentDidMount");
    }

    componentDidUpdate() {
        console.log('CurrentLocation componentDidUpdate');
    }

    static getDerivedStateFromProps(props, state) {
        console.log("CurrentLocation getDerivedStateFromProps");
        console.dir(props);
        console.dir(state);
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("CurrentLocation getSnapshotBeforeUpdate");
        console.dir(prevProps);
        console.dir(prevState);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("CurrentLocation shouldComponentUpdate");
        console.dir(nextProps);
        console.dir(nextState);
        return nextProps.address !== this.props.address;
    }

    componentWillUnmount() {
        console.log("CurrentLocation componentWillUnmount");
    }

    render() {
        console.log("CurrentLocation render")
        return (<div className="col-xs-12 col-md4 col-md-offset-3 current-location">
            <h4 id="save-location">{this.props.address}</h4>
        </div>)
    }

}

export default CurrentLocation;