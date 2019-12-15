import React from 'react';
import '../styles/navBar.css'

class navBar extends React.Component {
    render() {
        return (
            <div className='navBar'>
                <div>
                    <ul className='nav'>
                        <li className='item'>View Properties</li>
                        <li className='item'>Add a Property</li>
                    </ul>
                </div>
            </div>
        )
    }
}



export default navBar;