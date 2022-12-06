import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    const styleActive = {
        textDecoration: 'none',
        color: 'yellow',
        fontSize: '20px'

    }

    const styleInActive = {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px'
    }
    return (
        <nav
            style={{
                backgroundColor: 'darkslateblue',
                padding: '15px',
                display: 'flex',
                gap: '20px'
            }}

        >
            <NavLink
                to='/'
                style={({isActive})=>(isActive ? styleActive : styleInActive)}
            >
                Home
            </NavLink>

            <NavLink
                to='/profile'
                style={({isActive})=>(isActive ? styleActive : styleInActive)}
            >
                Profile
            </NavLink>
        </nav>
    )
}

export default Navbar