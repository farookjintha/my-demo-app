import { useEffect, useState } from "react";
import ComponentD from "./ComponentD";

const ComponentC = () => {
    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);

    const [greetings, setGreetings] = useState('Happy Weekend!'); //StateVaraible
    

    useEffect(() => {
        console.log('useEffect #1 is called...');
    }); //useEffect with only first paramenter (ie., function) is called everytime.

    useEffect(()=> {
        console.log('useEffect #2 is called...');
    }, []); //useEffect with Empty Dependency Array is called at Mounting Phase.

    useEffect(() => {
        console.log('useEffect #3 is called...');
    }, [secondCounter]); //useEffect with a variable in dependency array will be called when the variable changes.


    return (
        <div>
            {/* Component C
            <button onClick={() => setFirstCounter(firstCounter + 1)}>Click First Counter</button>
            <button onClick={() => setSecondCounter(secondCounter + 1)}>Click Second Counter</button>
            <h3>First Counter: {firstCounter}</h3>
            <h3>Second Counter: {secondCounter}</h3> */}
            {firstCounter <= 10 && <ComponentD  greetings={greetings} />}
        </div>
    )
}

export default ComponentC;