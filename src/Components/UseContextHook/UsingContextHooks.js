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
