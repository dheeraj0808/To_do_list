import React, { useState } from "react";
import '../assets/style/counter.css'
function Counter() {
    const [count, setCount] = useState(0);
    //for increment
    const increment = () => {
        setCount(count + 1);

    }
    // for decrement 
    const decrement = () => {
        setCount(count - 1);
    }
    //for reset value
    const reset = () => {
        setCount(0);
    }
    return (
        <div className="counter-container">
            <p>COUNTER APP </p>
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );

}
export default Counter