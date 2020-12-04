import React, { useContext } from "react";
import { CountContext } from "./ParentComponent";

function ComponentA() {
    const countContext = useContext(CountContext);

    return (
        <div>
            <p>Component A</p>
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

export default ComponentA;
