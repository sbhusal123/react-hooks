import React from "react";

function _Button(props) {
    console.log(`Button redered - ${props.text} `);
    return (
        <p align="center">
            <button onClick={props.handler}>{props.text}</button>
        </p>
    );
}

function _Count(props) {
    console.log(`Text rendered - ${props.text} Text`);
    return (
        <p align="center">
            {props.text} - {props.value}
        </p>
    );
}

export const Button = React.memo(_Button);
export const Count = React.memo(_Count);
