import React, { useReducer } from "react";

// Reducer
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increament":
            return state + 1;
        case "decreament":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function MultipleReducer() {
    // For the component with same state transition, multiple reducer can be used without duplicating code
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return (
        <div style={{ margin: "20%" }}>
            <div>
                <p>CountOne: {count}</p>
                <button
                    onClick={() => {
                        dispatch("increament");
                    }}
                >
                    IncreamentOne
                </button>
                <button
                    onClick={() => {
                        dispatch("decreament");
                    }}
                >
                    DecreamentOne
                </button>
                <button
                    onClick={() => {
                        dispatch("reset");
                    }}
                >
                    ResetOne
                </button>
            </div>
            <br />
            <div>
                <p>CountTwo: {countTwo}</p>
                <button
                    onClick={() => {
                        dispatchTwo("increament");
                    }}
                >
                    IncreamentTwo
                </button>
                <button
                    onClick={() => {
                        dispatchTwo("decreament");
                    }}
                >
                    DecreamentTwo
                </button>
                <button
                    onClick={() => {
                        dispatchTwo("reset");
                    }}
                >
                    ResetTwo
                </button>
            </div>
        </div>
    );
}

export default MultipleReducer;
