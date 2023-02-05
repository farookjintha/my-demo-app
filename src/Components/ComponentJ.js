import { useRef, useState } from "react";

const ComponentJ = ()=>{
    const inputRef = useRef(null);
    const [name, setName] = useState('');


    console.log('Rendering..........')

    const handleFocus = () => {
        inputRef.current.focus();
    }

    const handleInput = () => {
        console.log('Current Value: ', inputRef.current.value);
    }


    const handleName = (e) => {
        e.preventDefault();

        setName(e.target.value);
        console.log('Current Name: useState: ', name);
    }

    return (
        <div>
            ComponentJ

            <div>
                <h4>Enter a string: useRef</h4>
                <input onChange={handleInput} ref={inputRef}  type='text'/>
                <br/>

                <button onClick={handleFocus}>Click to focus!</button>

                <h4>Enter your name: useState</h4>
                <input onChange={handleName} value={name} type='text'/>
            </div>
            
        </div>
    )
};

export default ComponentJ;