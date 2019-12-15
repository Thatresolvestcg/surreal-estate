import React from 'react';
import NavBar from './NavBar';
import '../styles/app.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className='hello'>
                    <h1>hello world</h1>
                </div>
            </div>
        )
    }
}

export default App;