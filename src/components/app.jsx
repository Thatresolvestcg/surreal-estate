import React from 'react';
import navBar from './navBar';
import '../styles/app.css'

class App extends React.Component {
    render() {
        return (
            <span>
                <div className='navBar'>
                    test
            </div>
                <div className='hello'>
                    <h1>hello world</h1>
                </div>
            </span>
        )
    }
}

export default App;