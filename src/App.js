import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/pages/homepage/Homepage'

function App() {

    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path='/' element={<Homepage />}>
                    </Route>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default App;