import React, { useState, useEffect, useRef } from "react";

function AdvanceUsage() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTime => prevTime + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            <br></br>
            <p align="center">
                Time -{timer}
                <br></br>
                <button onClick={() => clearInterval(intervalRef.current)}>
                    Clear Timer
                </button>
            </p>
        </div>
    );
}

export default AdvanceUsage;
