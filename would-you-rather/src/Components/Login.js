import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import UserImage from './UserImage'
import { Label, BottomWrapperColumn, SolidButton as Button } from './sharedElements'
import gamelogo from '../images/logo.png'
import { connect } from 'react-redux'
import { signInUser } from '../actions/authedUser'
import { useHistory } from 'react-router-dom' 

// This Login Component is a lightweight interface for users to sign in to our application.
// At this point, no user authentication is implemented.
// This component needs access to the authedUser and users portions of our store.
// This component dispatches our sign in action to the store and redirects to the dashboard.

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


function Login (props) {
    const history = useHistory()
    //check if authedUser exists and redirect to dahsboard if so
    if (props.authedUser) { history.push('/dashboard')}

    let newSelectedUser = null
    
    const handleChange = (selectedUser) => {
        newSelectedUser = selectedUser.value
        console.log('new selected user: ', newSelectedUser)
        
    }

    

    const handleSubmit = (e) => {
        if(!newSelectedUser){alert('No user selected. Please select a user to sign in.')} 
        else{
            props.dispatch(signInUser(newSelectedUser))
            history.push('/dashboard');
        }
        e.preventDefault()
    }

    const options = []
    for (const [user_id, user_obj] of Object.entries(props.users)) {
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


                <StyledSelect onChange={handleChange} id="login" options={options} className="react-select-container" classNamePrefix='react-select' />

                <Button onClick={handleSubmit} >Sign In</Button>

            </BottomWrapperColumn>            
        </LoginWrapper>
    )
}






function mapStateToProps( {authedUser, users}) {
    return {authedUser, users}
}

export default connect(mapStateToProps)(Login)