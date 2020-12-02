import React, { useState, useEffect } from "react";

function RunEffectOnlyOnce() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log("Mouse event");
        setX(e.clientX);
        setY(e.clientY);
    };

    // Defining empty array in  the dependency list causes it to render only for first time
    useEffect(() => {
        console.log("useEffec called.");
        window.addEventListener("mousemove", logMousePosition);
    }, []);

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    );
}

export default RunEffectOnlyOnce;
