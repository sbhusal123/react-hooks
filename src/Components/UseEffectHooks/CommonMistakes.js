import React, { Component, useState, useEffect } from "react";

export class IntervalClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    // To Prevent Memory Leakage
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div>
                <p align="center">From Class Component</p>
                <h1 align="center">{this.state.count}</h1>
            </div>
        );
    }
}

function IntervalFunctional() {
    const [count, setCount] = useState(0);

    /*
        If you think dependency array is a way to specifiy
        when you want to rerun the effect, the you're
        going to run into the problem. 

        Instead dependency array can be thought of as a way to let react know
        about everything that the effect must watch for changes.
    */

    const tick = () => {
        setCount(prevCount => prevCount + 1);
    };

    // Bind on initial render only
    //
    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <br />
            <p align="center">From Functional Component</p>
            <h2 align="center">{count}</h2>
        </div>
    );
}

export default IntervalFunctional;
