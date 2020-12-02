import React, { useState } from "react";

function useStateWithObject() {
    /*
        - Use State Doesn't merges the state
        - setState though merges the state in class based component.
    */
    const [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e =>
                        setName({ ...name, firstName: e.target.value })
                    }
                ></input>
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e =>
                        setName({ ...name, lastName: e.target.value })
                    }
                ></input>

                <h2>First Name: {name.firstName}</h2>
                <h2>Last Name: {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    );
}

export default useStateWithObject;
