import { useState } from 'react';

const ClickCounter = ({ initial_state }) => {
	const [counter, setCounter] = useState(initial_state);

    const increment = () => {
        setCounter(counter + 1)
        console.clear()
        console.log(counter)
    }
    
    const decrement = () => {
        setCounter(counter - 1)
        console.clear()
        console.log(counter)
    }


	return <div>
        <button onClick={increment}>
            +
        </button>
        <p>{counter}</p>
        <button onClick={decrement}>
            -
        </button>
    </div>;
};

export default ClickCounter;
