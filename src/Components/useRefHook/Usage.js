import React, { useEffect, useRef } from "react";

function FocusInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        // focus the input element
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <p align="center">
                <span>Input Field</span>
                <br></br>
                <input ref={inputRef} type="text"></input>
            </p>
        </div>
    );
}

export default FocusInput;
