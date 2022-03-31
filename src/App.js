import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/pages/homepage/Homepage'

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/'>
                    <Homepage/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App;