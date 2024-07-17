import React, { useState } from 'react'

const APIExample = () => {

    const [name, setName] = useState('')

    const getAPIData = async () =>{
        alert(name)
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'X-Api-Key': 'JYTs51vHJhbl7mtwPQhfog==vZYe4WCbs7Erv5V2' },
           
        };
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${name}`, requestOptions);
        const data = await response.json();
        console.log(15, data);
    }

  return (
    <div>
        Enter the Exercise Name : <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <button onClick={getAPIData}>Click Here</button>
    </div>
  )
}

export default APIExample
