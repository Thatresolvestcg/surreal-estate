import React from 'react';
import '../styles/NavBar.css'

class NavBar extends React.Component {
    render() {
        return (
            <div className='NavBar'>
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



export default NavBar;