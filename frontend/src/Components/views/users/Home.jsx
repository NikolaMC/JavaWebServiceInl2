import React from "react";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const Home = () => {
    const [message, setMessage] = useState("");

    return (
        <div>
            <p>{message}</p>
            <Register setMessage={setMessage} />
            <Login setMessage={setMessage} />
        </div>
    )
}

export default Home;