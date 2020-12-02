// useEffect with cleanup / componentUnmount
// Can be used to stop executing handler and effects for the component which have already unmounted
// Preventing Memory Leakage
// Make sure you removeEvent listener.

import React, { useState } from "react";
import HookMouse from "./MouseMovement";

function UseEffectWithUnmount() {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button
                onClick={() => {
                    setDisplay(!display);
                }}
            >
                Toogle display
            </button>
            {display && <HookMouse />}
        </div>
    );
}

export default UseEffectWithUnmount;
