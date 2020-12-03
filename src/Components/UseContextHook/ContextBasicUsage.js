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
                {contextData => {
                    return <p>User context value {contextData}</p>;
                }}
            </UserContext.Consumer>
            <ChannelContext.Consumer>
                {contextData => {
                    return <p>Channel context value {contextData}</p>;
                }}
            </ChannelContext.Consumer>
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
