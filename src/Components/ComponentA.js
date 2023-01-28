import { useState } from 'react';


const ComponentA = () => {
    // const [count, setCount] = useState(0);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        mobileNumber: ''
    })

    const [isSubmitted, setIsSubmitted] = useState(false);

    // const incrementCount = () => {
    //     setCount(count + 1);
    // }

    const handleName = (event) => {
        event.preventDefault();
        setIsSubmitted(false);
        console.log('name: ', {...userDetails, name: event.target.value})
        setUserDetails({...userDetails, name: event.target.value})
    }

    const handleEmail = (event) => {
        event.preventDefault();
        setIsSubmitted(false);
        console.log('email: ', {...userDetails, email: event.target.value})
        setUserDetails({...userDetails, email: event.target.value})

    }

    const handleMobileNumber = (event) => {
        event.preventDefault();
        setIsSubmitted(false);
        console.log('Mobile: ', {...userDetails, mobileNumber: event.target.value})
        setUserDetails({...userDetails, mobileNumber: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        console.log('UserDetails Submitted: ', userDetails);
    }

    return (
        <div>
            <div>ComponentA</div>
            {/* <button onClick={incrementCount}>Click</button>
            <h3>Count : {count}</h3> */}

            {isSubmitted && 
            <div>
                <h3>Name: {userDetails.name}</h3>
                <h3>Email: {userDetails.email}</h3>
                <h3>Mobile Number: {userDetails.mobileNumber}</h3>
            </div>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input onChange={handleName} value={userDetails.name} placeholder='Enter a name' />
                </div>
                <div>
                    <label>Email: </label>
                    <input onChange={handleEmail} value={userDetails.email} placeholder='Enter an email' />
                </div>
                <div>
                    <label>Mobile Number: </label>
                    <input onChange={handleMobileNumber} value={userDetails.mobileNumber} placeholder='Enter a mobile number' />
                </div>
                <div>
                    <input type='submit' placeholder='Submit' />
                </div>
            </form>
        </div>
    )
}

// function ComponentA(){
//     return (
//         <div>ComponentA</div>
//     )
// }

export default ComponentA;