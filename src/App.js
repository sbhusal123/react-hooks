import React from "react";

import ContextBasicUsage from "./Components/UseContextHook/UsingContextHooks";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
    return (
        <div className="App">
            <UserContext.Provider value={"Surya Bhusal"}>
                <ChannelContext.Provider value={"RGB"}>
                    <ContextBasicUsage />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default App;
