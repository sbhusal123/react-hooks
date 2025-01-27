## Context Hook Apis

-   Provides a way to pass data through the component tree without having to pass props manually to every level.

**Context Basic Usage**

```js
// App.js
import React from "react";

import ContextBasicUsage from "./Components/UseContextHook/ContextBasicUsage";

// Creating a Context at the root Level
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
```

```js
// ContextBasicUsage
import React from "react";
import { UserContext, ChannelContext } from "../../App";

/*
    Nesting Level
    - A
      |- B
         |- C
*/

function ComponentC() {
    return (
        <div
            style={{
                border: "1px solid blue",
                margin: "10% 20%",
                width: "auto",
                padding: "2%"
            }}
        >
            ComponentC
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                                {channel => {
                                        return (
                                            <p>User - {user} , Channel - {channel}</p>
                                        );
                                }}
                        <ChannelContext.Consumer/>
                    );
                }}
            </UserContext.Consumer>
        </div>
    );
}

function ComponentB() {
    return (
        <div
            style={{
                border: "1px solid red",
                margin: "10% 20%",
                width: "auto",
                padding: "2%"
            }}
        >
            ComponentB
            <ComponentC />
        </div>
    );
}

export default function ComponentA() {
    return (
        <div
            style={{
                border: "1px dashed green",
                margin: "10% 20%",
                width: "30%",
                padding: "2%"
            }}
        >
            ComponentA
            <ComponentB />
        </div>
    );
}
```

```txt
|- App---------------------------------------------> Create Context(Provider)--------------------------|
    |                                                         |                                        |
    |                                                         |                                        |
    |- contains component A------------------------>No need to pass to intermediate Component----------|
       |                                                      |                                        |
       |                                                      |                                        |
       |                                                      |                                        |
       |- contains component B--------------------->No need to pass to intermediate Component----------|
           |                                                  |                                        |
           |                                                  |                                        |
           |                                                  |                                        |
           |- contains component C -------------> Import and Use the context(Consumer)-----------------|
```

# 1. Using Context Hooks

-   No need to nest the context consumer when using hooks.

**Above approach using context.**

```js
import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../../App";

// Using Context Hooks
function ComponentC() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div
            style={{
                border: "1px solid blue",
                margin: "10% 20%",
                width: "auto",
                padding: "2%"
            }}
        >
            ComponentC
            <p>User - {user}</p>
            <p>Channel - {channel}</p>
        </div>
    );
}
```
