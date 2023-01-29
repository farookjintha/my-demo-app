import ComponentG from "./ComponentG";
import { useState } from "react";


//Parent
const ComponentF = () => {
    const [count, setCount] = useState(0);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        mobileNumber: ''
    });


    const handleUserDetails = (value) => {
        return setUserDetails(details => {
            return {...details, ...value}
        })
    }

    return (
        <div>
            ComponentF
            <ComponentG count={count} userDetails={userDetails} setCount={setCount} handleUserDetails={handleUserDetails} />
        </div>
    )
}

export default ComponentF;