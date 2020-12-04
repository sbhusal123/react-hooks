import { useEffect, useState } from "react";

export function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count  ${count}`;
    }, [count]);

    return <div></div>;
}

export function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increament = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decreament = () => {
        setCount(prevCount => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return [count, increament, decreament, reset];
}

export function useInput(initialValue = "") {
    const [value, setValue] = useState(initialValue);

    const reset = () => {
        setValue(initialValue);
    };

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value);
        }
    };

    return [value, bind, reset];
}
