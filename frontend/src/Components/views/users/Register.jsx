import React from "react";
import { useState } from "react";

const Register = ({ setMessage }) => {

    const [user, setUser] = useState({username: "", password: ""});

    const handleChangeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const registerUser = async (e) => {
        e.preventDefault();
        if (user.username !== "" && user.password !== "") {
            const res = await fetch("/user/register", {
                method: "PUT",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.text();
            setMessage(data);
            setUser({username: "", password: ""});
        } else {
            setMessage("Username and password fields can't be empty");
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
                <input type="text" name="username" value={user.username} placeholder="Username" onChange={handleChangeInput} />
                <input type="text" name="password" value={user.password} placeholder="Password" onChange={handleChangeInput} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;