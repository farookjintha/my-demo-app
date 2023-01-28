import { useEffect, useState } from "react";
import ComponentE from "./ComponentE";


const ComponentD = ({greetings}) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const cities = ['Chennai', 'Bangalore', 'Trichy', 'Coimbatore', 'Madurai'];
    const names = ['Arun', 'John', 'Karthik', 'Ramesh', 'Preethi'];

    // const {greetings} = props;

    useEffect(() => {
        console.log('Component D is mounted...')
        return () =>{
            console.log('useEffect #4 is called...')
            console.log('Component D is unmounted...')
        }
    }, []);

    useEffect(() => {
        setName(names[count]);
        setCity(cities[count]);
    }, [count]);

    return (
        <div>
            ComponentD
            <h1>Count : {count}</h1>
            {
                count >= 0 && count < 5 && 
                <div>
                    <h3>Name: {name}</h3>
                    <h3>City: {city}</h3>
                </div>
            }
            <button onClick={() => setCount(count + 1)}>Increment - Change User</button>
            <button onClick={() => setCount(count - 1)}>Decrement - Change User</button>
            <ComponentE greetings={greetings} />
        </div>
    )
} 

export default ComponentD;