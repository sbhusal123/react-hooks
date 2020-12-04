import React, { useState, useCallback } from "react";
import { Button, Count } from "./SubComponent";

function Basic() {
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(100);

    /* 
        const increamentAge = () => {
            setAge(age + 1);
        };

        const increamenSalary = () => {
            setSalary(salary + 1);
        };    
    */

    /* 
      - Optimal code to memonize the function to prevent re-rendering.
      - This doesn't prevents reallocation in memory
      - Instead the result of the function is memorized
    */
    const increamentAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const increamenSalary = useCallback(() => {
        setSalary(salary + 1);
    }, [salary]);

    return (
        <div>
            <br />
            <Count text="Age" value={age} />
            <Button text="Increament Age" handler={increamentAge} />
            <br />
            <Count text="Salary" value={salary} />
            <Button text="Increament Salary" handler={increamenSalary} />
        </div>
    );
}

export default Basic;
