import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialLogin = {
    credentials: {
        username: "",
        password: ""
    }
}

const Login = (props) => {
    const {push} = useHistory()
    const [form, setForm] = useState(initialLogin)

    const onChange = (e) => {
        setForm({
            credentials: {
                ...form.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/api/login", form.credentials)
        .then(res=>{
            localStorage.setItem("token", res.data.token);
            push("/friends")
        }).catch(err => {
            console.error(err)
        }).finally(
            setForm(initialLogin)
        )
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type="text"
                        name="username"
                        onChange={onChange}
                        value={form.credentials.username}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={form.credentials.password}
                />
                </div>
                <button>Submit</button>  
            </form>
        </div>
    )

}

export default Login