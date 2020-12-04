// Cutom hook which returns the previous State

import { useRef, useEffect } from "react";

export default function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
