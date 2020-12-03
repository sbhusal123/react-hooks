import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increament1":
            return {
                ...state,
                firstCounter: state.firstCounter + action.value
            };
        case "decreament1":
            return {
                ...state,
                firstCounter: state.firstCounter - action.value
            };
        case "reset1":
            return {
                ...state,
                firstCounter: 0
            };
        case "increament2":
            return {
                ...state,
                secondCounter: state.secondCounter + action.value
            };
        case "decreament2":
            return {
                ...state,
                secondCounter: state.secondCounter - action.value
            };
        case "reset2":
            return {
                ...state,
                secondCounter: 0
            };
        default:
            return state;
    }
};

function ComplexReducerWithObject() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ margin: "20%" }}>
            <p>Count: {count.firstCounter}</p>
            <button
                onClick={() => {
                    dispatch({ type: "increament1", value: 1 });
                }}
            >
                Increament
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "decreament1", value: 1 });
                }}
            >
                Decreament
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "reset1", value: 1 });
                }}
            >
                Reset
            </button>
            <br />
            <br />
            <p>Count: {count.secondCounter}</p>
            <button
                onClick={() => {
                    dispatch({ type: "increament2", value: 5 });
                }}
            >
                Increament By 5
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "decreament2", value: 5 });
                }}
            >
                Decreament By 5
            </button>
        </div>
    );
}

export default ComplexReducerWithObject;
