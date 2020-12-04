// Update Document Title
import React, { useState } from "react";
import { useDocumentTitle } from "./Hooks";

function Basic() {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return (
        <div>
            <br></br>
            <p align="center">
                <button onClick={() => setCount(count + 1)}>
                    Count - {count}
                </button>
            </p>
        </div>
    );
}

export default Basic;
