import React, {useState} from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Logo,
    Close
} from './NavbarElements';
import {MdCompareArrows} from 'react-icons/md'
import Dropdown from './Dropdown';


const Navbar = () => {
    const [isOpen, setIsOpen] =  useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Nav>
                {/* This is the Logo */}
                <NavLink to="/" >
                    {/* <img src={require('../../images/GutenMade-Logo-White.png')} alt="logo" /> */}
                    {isOpen ? <Logo onClick={toggle}/> : <Logo /> }
                </NavLink>

                {/* <Bars /> */}
                {isOpen ? <Close onClick={toggle}/> : <Bars onClick={toggle}/>}

                {/* {isOpen && <Dropdown isOpen={isOpen} toggle={toggle}/>} */}
                <Dropdown isOpen={isOpen} toggle={toggle}/>

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
