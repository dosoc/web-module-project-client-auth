import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddFriends = () => {
    const { push } = useHistory()

    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleChange = (e) => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
        axios.post(`http://localhost:9000/api/friends`, friend, {
            headers:{ authorization: token}
        })
            .then(res=> {
                push('/friends')
            })
            .catch(err=>{
                console.error(err)
            })
    }

    return(
        <div>
            <h2>Add Friends</h2>
            <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor='name'>Name:</label>
                    <input 
                        name='name'
                        id='name'
                        onChange={handleChange}
                    />  
                </div>
                <div>
                  <label htmlFor='age'>Age:</label>
                    <input 
                        name='age'
                        id='age'
                        onChange={handleChange}
                    />  
                </div>
                <div>
                  <label htmlFor='email'>Email:</label>
                    <input 
                        name='email'
                        id='email'
                        onChange={handleChange}
                    />  
                </div>
                <button>Add Friend</button>
            </form>
        </div>
    )
}
export default AddFriends