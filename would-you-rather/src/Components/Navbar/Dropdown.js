import React from 'react'
import UserImage from '../UserImage'
import { 
    DropdownContainer,
    // Icon,
    // CloseIcon,
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
            {/* <Icon>
                <CloseIcon></CloseIcon>
            </Icon> */}

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
                    {/* <DropdownLink to="/login"> Login </DropdownLink> */}
                </DropdownMenu>

                <DropdownBtnWrapper>
                    {user 
                    ?   <DropdownRoute to='/login' onClick={() => {dispatch(signOutUser())}}>Log Out</DropdownRoute>
                    :   <DropdownRoute to='/login'>Login</DropdownRoute>
                    }
                    
                </DropdownBtnWrapper>
            </DropdownWrapper>
            
        </DropdownContainer>
    )
}

export default Dropdown
