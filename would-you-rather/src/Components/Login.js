import React, { Component } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import {users} from '../starter/_DATA'
import UserImage from './UserImage'
import { Label, BottomWrapperColumn } from './sharedElements'

import gamelogo from '../images/logo.png'


const Button = styled.button`
    height: 2rem;
    border-radius: 5px;
    margin: 10px;
    
    border: 2px solid lightgreen;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: lightgreen;
    color: #010606;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: transparent;
        color: #010606;
    }
`


const LoginWrapper = styled.div`

    margin-bottom: 200px;

    & #gamelogo {
        width: 90%;
        margin: 50px auto;
    }

    & strong {
        color: lightgreen;
        margin: auto;
        font-size: 1.5rem;
    }

`

const StyledSelect = styled(Select)`
    margin: 10px;

    /* & .react-select-container{} */

    /* & .react-select__control {} */

    & .react-select__value-container{
        height: 55px;
        align-content: center;
    }

    /* & .react-select__indicators{} */

    /* & .react-select__menu{} */

    /* & .react-select__menu-list{} */

    & .react-select__option{
        display: block;
        align-content: center;
    }

    & .user_name {
        padding-left: 10px;
    }
`


class Login extends Component {
    state = { selectedUser: null }
    
    handleChange = (selectedUser) => {
        this.setState({selectedUser: selectedUser.value});
        console.log('new selected user: ', selectedUser.value)
    }

    handleSubmit = (e) => {
        alert('user: ' + this.state.selectedUser)
        e.preventDefault()
    }

    render () {

        const options = []

        for (const [user_id, user_obj] of Object.entries(users)) {
            // console.log("user", user_obj)
            options.push(
                {
                    value: user_id, 
                    label: <><UserImage user={user_obj} size="35px"/><span className="user_name">{user_obj.name}</span></>
                }
            )
        }

        return (
            <LoginWrapper>
                <Label>
                    <h1>Welcome to the game!</h1>
                </Label>

                <BottomWrapperColumn>
                    <img id="gamelogo" src={gamelogo} alt="LOGO" />

                    <strong>Please sign in to play the game.</strong>


                    <StyledSelect  onChange={this.handleChange} id="login" options={options} className="react-select-container" classNamePrefix='react-select' />

                    <Button onClick={this.handleSubmit} >Sign In</Button>

                </BottomWrapperColumn>            
            </LoginWrapper>
        )
    }




}

export default Login