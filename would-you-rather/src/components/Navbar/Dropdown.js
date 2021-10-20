import React from 'react'
import UserImage from '../UserImage'
import { 
    DropdownContainer,
    DropdownWrapper,
    DropdownMenu,
    DropdownLink,
    DropdownBtnWrapper,
    DropdownRoute,
    Welcome,
    Name,
} from './DropdownElements'
import {signOutUser} from '../../actions/authedUser'

const Dropdown = ({isOpen, toggle, user, dispatch}) => {

    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <DropdownWrapper>

                {user
                    &&   <Welcome>
                            
                            <UserImage userId={user.id} size={"54px"} />
                            <Name>Hello, {user.name}!</Name>
                        </Welcome>
                        
                }

                <DropdownMenu>
                    <DropdownLink to='home'>Home</DropdownLink>
                    <DropdownLink to="/add"> New Question </DropdownLink>
                    <DropdownLink to="/leaderboard"> Leader Board </DropdownLink>
                </DropdownMenu>

                <DropdownBtnWrapper>
                    {user 
                    ?   <DropdownRoute to='/login' onClick={() => {dispatch(signOutUser())}}>Log Out</DropdownRoute>
                    :   <DropdownRoute to='/signup'>Sign Up</DropdownRoute>
                    }
                </DropdownBtnWrapper>

            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
