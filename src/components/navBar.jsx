import React from 'react';
import '../styles/NavBar.css'
import logo from '../Images/logo.png'

class NavBar extends React.Component {
    render() {
        return (
            <div className='NavBar'>
                <div>
                    <ul className='nav'>
                        <img className='logo' src={logo} alt='Company Logo' />
                        <li className='item'>View Properties</li>
                        <li className='item'>Add a Property</li>
                    </ul>
                </div>
            </div>
        )
    }
}



export default NavBar;