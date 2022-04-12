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

    console.log(userFormData)

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
            auth.login(token)
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
                            <input name='username' placeholder='username' value={userFormData.username} onChange={handleInputChange}></input>
                            <input name='password' placeholder='password' value={userFormData.password} onChange={handleInputChange}></input>
                            <button onSubmit={handleFormSubmit}>Login</button>
                        </div>
                        <p>Don't have an account? <button onClick={() => handleLanding()}>Sign-Up!</button></p>
                    </>
                ) : (
                    <>
                        <div>
                            <input name='username' placeholder='username' value={userFormData.username} onChange={handleInputChange}></input>
                            <input name='password' placeholder='password' value={userFormData.password} onChange={handleInputChange}></input>
                            <input name='email' placeholder='email' value={userFormData.email} onChange={handleInputChange}></input>
                            <button onSubmit={handleFormSubmit}>Sign-Up</button>
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