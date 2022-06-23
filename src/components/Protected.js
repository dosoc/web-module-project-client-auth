import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Friends = () => {
    const [friends, setFreinds] = useState([])

    const getData = () => {
        axios.get("http://localhost:9000/api/friends", {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        .then(res=> {
            console.log(res)
            setFreinds(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])
    return(
        <ul>
            {friends.map(friend=> {
                return(
                    <li key={friend.id}>{friend.name}</li>
                )
            })}
        </ul>
    )
}

export default Friends