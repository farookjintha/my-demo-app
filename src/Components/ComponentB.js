import { useState } from 'react';


const ComponentB = () => {
    // const [count, setCount] = useState(0);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        mobileNumber: ''
    })

    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleUserDetails = (value) => {
        setIsSubmitted(false);
        return setUserDetails(details => {
            return {...details, ...value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        console.log('UserDetails Submitted: ', userDetails);
    }

    return (
        <div>
            <div>ComponentA</div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input onChange={(e) => handleUserDetails({name: e.target.value})} value={userDetails.name} placeholder='Enter a name' />
                </div>
                <div>
                    <label>Email: </label>
                    <input onChange={(e) => handleUserDetails({email: e.target.value})} value={userDetails.email} placeholder='Enter an email' />
                </div>
                <div>
                    <label>Mobile Number: </label>
                    <input onChange={(e) => handleUserDetails({mobileNumber: e.target.value})} value={userDetails.mobileNumber} placeholder='Enter a mobile number' />
                </div>
                <div>
                    <input type='submit' placeholder='Submit' />
                </div>
            </form>


            <h1>User Detail:</h1>

            {isSubmitted && 
            <div>
                <h3>Name: {userDetails.name}</h3>
                <h3>Email: {userDetails.email}</h3>
                <h3>Mobile Number: {userDetails.mobileNumber}</h3>
            </div>}
        </div>
    )
}

// function ComponentA(){
//     return (
//         <div>ComponentA</div>
//     )
// }

export default ComponentB;