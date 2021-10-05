import React, {useState} from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Logo,
    Close,
    Welcome,
    // LogoutBtn
} from './NavbarElements';
import UserImage from '../UserImage'
// import {MdCompareArrows} from 'react-icons/md'
import Dropdown from './Dropdown';


const Navbar = (props) => {
    const [isOpen, setIsOpen] =  useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const user = props.user
    // console.log("user obj:", user)

    return (
        <>
            <Nav>
                {/* This is the Logo */}
                <NavLink to="/" >
                    {/* <img src={require('../../images/GutenMade-Logo-White.png')} alt="logo" /> */}
                    {isOpen ? <Logo onClick={toggle}/> : <Logo /> }
                </NavLink>

                {isOpen ? <Close onClick={toggle}/> : <Bars onClick={toggle}/>}

                <Dropdown isOpen={isOpen} toggle={toggle} user={user}/>

                <NavMenu>
                    <NavLink to="/home" activeStyle> Home </NavLink>
                    <NavLink to="/add" activeStyle> New Question </NavLink>
                    <NavLink to="/leaderboard" activeStyle> Leader Board </NavLink>
                    {/* <NavLink to="/login" activeStyle> Login </NavLink> */}
                </NavMenu>

                <div>
                    {user
                        ?   <Welcome>
                                <p>Hello, {user.name}!</p>
                                <UserImage user={user} size={"34px"} />

                                <NavBtnLink to="/login">Log Out</NavBtnLink>

                            </Welcome>

                        :   <NavBtn>
                                <NavBtnLink to="/login">Login</NavBtnLink>
                            </NavBtn>
                        
                    }
                </div>

                

            </Nav>
        </>
    )
}

export default Navbar
