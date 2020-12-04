import React, { useContext } from "react";
import { CountContext } from "./ParentComponent";

function ComponentB() {
    const countContext = useContext(CountContext);

    return (
        <div>
            <p>Component B</p>
            <button
                onClick={() => {
                    countContext.dispatch("increament");
                }}
            >
                Increament
            </button>
            <button
                onClick={() => {
                    countContext.dispatch("decreament");
                }}
            >
                Decreament
            </button>
            <button
                onClick={() => {
                    countContext.dispatch("reset");
                }}
            >
                Reset
            </button>
        </div>
    );
}

export default ComponentB;
