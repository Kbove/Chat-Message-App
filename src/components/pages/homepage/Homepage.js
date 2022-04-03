import React, { useState } from 'react'


function Homepage() {
    console.log('hello world')

    return (
        <>
            <h1>Chat!</h1>
            <div>
                <input placeholder='username'></input>
                <input placeholder='password'></input>
                <button>Login</button>
            </div>
            <p>Don't have an account? <a href="#">Sign-Up!</a></p>

        </>
    )
}

export default Homepage