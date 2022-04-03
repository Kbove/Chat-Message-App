import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/pages/homepage/Homepage'
import Profile from './components/pages/profile/Profile'

function App() {

    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path='/' element={<Homepage />}>
                    </Route>
                    <Route exact path='Profile' element={<Profile />}>
                    </Route>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default App;