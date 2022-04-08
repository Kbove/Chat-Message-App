import React, { useState } from 'react'
import API from '../../utils/API'


function Homepage() {

    const [userFormData, setUserFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUserFormData({ ...userFormData, [name]: value})
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