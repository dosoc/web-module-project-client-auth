import React, { useState, useEffect } from 'react';
import axios from 'axios'

const FriendList = () => {
    const [friends, setFreinds] = useState([])

    const getData = () => {
        axios.get("http://localhost:9000/api/friends", {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        .then(res=> {
            setFreinds(res.data)
        })
        .catch(err=> {
            console.error(err)
        })
    }

    useEffect(()=>{
        getData()
    },[])

    console.log(friends)
    
    return(
        <div>
            <h2>Friends List</h2>
            <ul>
                {friends.map(friend=> {
                    return(
                        <li key={friend.id}>{friend.name} -- {friend.age} -- {friend.email}</li>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default FriendList