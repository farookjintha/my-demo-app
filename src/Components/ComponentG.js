const ComponentG = ({count, setCount, userDetails, handleUserDetails}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted UserDetails: ', userDetails)
    }

    return (
        <div>
            ComponentG
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Click to increment</button>

            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input onChange={(e) => handleUserDetails({name: e.target.value})} value={userDetails.name} placeholder="Enter your name"  />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input onChange={(e) => handleUserDetails({email: e.target.value})} value={userDetails.email} placeholder="Enter your email"/>
                    </div>
                    <div>
                        <label>Mobile Number:</label>
                        <input onChange={(e) => handleUserDetails({mobileNumber: e.target.value})}  value={userDetails.mobileNumber} placeholder="Enter your mobile number"/>
                    </div>
                    <div>
                        <input type='submit' placeholder="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ComponentG;