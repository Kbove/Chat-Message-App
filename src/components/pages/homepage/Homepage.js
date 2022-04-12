import React, { useState } from 'react'
import API from '../../utils/API'
import auth from '../../utils/auth'
import Profile from '../profile/Profile'


function Homepage() {

    const [landing, setLandingPage] = useState('login')

    const handleLanding = (event) => {
        if (landing === 'login') {
            setLandingPage('signup')
        } else {
            setLandingPage('login')
        }
    }

    const [userFormData, setUserFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUserFormData({ ...userFormData, [name]: value })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation
        }

        try {
            const response = await API.signup(userFormData)
            const { token } = response.data
            Auth.login(token)
        } catch (err) {
            setShowAlert(true)
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        })
    }

    return (
        <>
            <h1>Chat!</h1>
            {auth.loggedIn() ? (
                <Profile />
            ) : (
                <>
                { landing === 'login' ? (
                    <>
                        <div>
                            <input placeholder='username'></input>
                            <input placeholder='password'></input>
                            <button>Login</button>
                        </div>
                        <p>Don't have an account? <button onClick={() => handleLanding()}>Sign-Up!</button></p>
                    </>
                ) : (
                    <>
                        <div>
                            <input placeholder='username'></input>
                            <input placeholder='password'></input>
                            <input placeholder='email'></input>
                            <button>Sign-Up</button>
                        </div>
                        <p>Already have an account?<button onClick={() => handleLanding()}>Login!</button></p>
                    </>
                )}
                </>
        )}
        </>
    )
}

export default Homepage