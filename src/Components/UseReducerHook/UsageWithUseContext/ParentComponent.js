import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export const CountContext = React.createContext();

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

function ParentComponent() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={{ count: count, dispatch: dispatch }}>
            <div className="App" style={{ margin: "20%" }}>
                Count - {count}
                <ComponentA />
                <ComponentB />
            </div>
        </CountContext.Provider>
    );
}

export default ParentComponent;
