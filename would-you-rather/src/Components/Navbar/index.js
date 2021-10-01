import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Logo
} from './NavbarElements';
import {MdCompareArrows} from 'react-icons/md'


const Navbar = () => {
    return (
        <>
            <Nav>
                {/* This is the Logo */}
                <NavLink to="/">
                    {/* <img src={require('../../images/GutenMade-Logo-White.png')} alt="logo" /> */}
                    {/* <MdCompareArrows  size="xlarge"/> */}
                    <Logo />
                </NavLink>

                {/* <Bars /> */}

                <NavMenu>
                    <NavLink to="/home" activeStyle> Home </NavLink>
                    <NavLink to="/add" activeStyle> New Question </NavLink>
                    <NavLink to="/leaderboard" activeStyle> Leader Board </NavLink>
                    <NavLink to="/login" activeStyle> Login </NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/login">Login</NavBtnLink>
                </NavBtn>

            </Nav>
        </>
    )
}

export default Navbar
