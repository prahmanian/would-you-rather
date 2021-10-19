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

import Dropdown from './Dropdown';
import gamelogo from '../../images/logo.png'
import { connect } from 'react-redux'
import {signOutUser} from '../../actions/authedUser'


const Navbar = (props) => {
    const [isOpen, setIsOpen] =  useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const user = props.user

    return (
        <>
            <Nav>
                {/* This is the Logo */}
                <NavLink to="/" >
                    {isOpen ? <Logo src={gamelogo} onClick={toggle}/> : <Logo src={gamelogo}/> }
                </NavLink>

                {isOpen ? <Close onClick={toggle}/> : <Bars onClick={toggle}/>}

                <Dropdown isOpen={isOpen} toggle={toggle} user={user} dispatch={props.dispatch}/>

                <NavMenu>
                    <NavLink to="/home" > Home </NavLink>
                    <NavLink to="/add" > New Question </NavLink>
                    <NavLink to="/leaderboard" > Leader Board </NavLink>
                </NavMenu>

                <div>
                    {user
                        ?   <Welcome>
                                <p>Hello, {user.name}!</p>
                                <UserImage userId={user.id} size={"40px"} />
                                <NavBtnLink to="/login" onClick={() => {props.dispatch(signOutUser())}}>Log Out</NavBtnLink>
                            </Welcome>

                        :   <Welcome>
                                <NavBtn>
                                    <NavBtnLink to="/login">Login</NavBtnLink>
                                </NavBtn>
                            </Welcome>
                        
                    }
                </div>

                

            </Nav>
        </>
    )
}

function mapStateToProps( {users, authedUser}) {
    return {user: users[authedUser]}
}

export default connect(mapStateToProps)(Navbar)
