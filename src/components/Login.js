import React, {useState} from 'react';
import axios from 'axios'

const initialLogin = {
    credentials: {
        username: "",
        password: ""
    }
}

const Login = (props) => {
    const [form, setForm] = useState(initialLogin)

    const onChange = (e) => {
        setForm({
            credentials: {
                ...form.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/api/login", form.credentials)
        .then(res=>{
            localStorage.setItem("token", res.data.token);
            setForm(initialLogin)
            props.history.push("/protected")
        }).catch(err => {
            console.error(err)
        })
    }

    return(
        <>
        <form onSubmit={login}>
            <input
                type="text"
                name="username"
                onChange={onChange}
                value={form.credentials.username}
            />
            <input
                type="password"
                name="password"
                onChange={onChange}
                value={form.credentials.password}
            />
            <button>Login</button>  
        </form>
        </>
    )

}

export default Login