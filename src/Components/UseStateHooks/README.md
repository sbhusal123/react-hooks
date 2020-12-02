## 1. Use State Hooks

-   Used in functional component to set and handle states.
-   Doesn't merges the state implicitly.

**Example:**

```js
import React, { useState } from "React";

function Foo() {
    const [state, stateHandler] = useState(/* Initia State Here*/);

    return (
        ...
    )
}

export default Foo;
```

## 2. Things to Keep in Mind.

-   When state have to be updated based on the previous state. Use stateHandler with arrow function.
-   setState in class based component though merges the state, useState doesn't merges so using spread operator.

**State Handler with arrow function**

```js
import React, { useState } from "react";

function Foo() {
    const [state, stateHandler] = useState(1);

    return (
        <div>
            <button onClick={stateHandler(prevState => prevState + 1)} />Increament</button>
        </div>
    )
}
```
