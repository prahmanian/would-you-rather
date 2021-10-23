import React, {useState} from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtnLink,
    Logo,
    Close,
    Welcome,
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

                {console.log("user: ", user)}
                {user
                    ?   <Welcome>
                            <p>Hello, {user.name}!</p>
                            <UserImage className={"navAvatar"} userId={user.id} size={"40px"} />
                            <NavBtnLink className={"navBtn"} to="/login" onClick={() => {
                                props.dispatch(signOutUser())
                                localStorage.setItem('would-you-rather-authedUser', null)
                                }}>Log Out</NavBtnLink>
                        </Welcome>

                    :   <Welcome>
                            <NavBtnLink className={"navBtn"} to="/signup">Signup</NavBtnLink>
                        </Welcome>
                    
                }

                

            </Nav>
        </>
    )
}

function mapStateToProps( {users, authedUser}, {clearSessionUser}) {
    return {user: users[authedUser], clearSessionUser}
}

export default connect(mapStateToProps)(Navbar)
