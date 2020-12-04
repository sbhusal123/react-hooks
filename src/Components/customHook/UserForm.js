import React from "react";
import { useInput } from "./Hooks";

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput("");
    const [lastName, bindLastName, resetLasttName] = useInput("");

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLasttName();
    };

    return (
        <div style={{ margin: "20% 30%" }}>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input {...bindFirstName} type="text"></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input {...bindLastName} type="text"></input>
                </div>
                <button type="Submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;
