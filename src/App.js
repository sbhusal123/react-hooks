import React from "react";

import IntervalFunctional, {
    IntervalClass
} from "./Components/UseEffectHooks/CommonMistakes";

function App() {
    return (
        <div className="App">
            <IntervalClass />
            <br />
            <IntervalFunctional />
        </div>
    );
}

export default App;
