import React from 'react'
import { 
    DropdownContainer,
    Icon,
    // CloseIcon,
    DropdownWrapper,
    DropdownMenu,
    DropdownLink,
    DropdownBtnWrapper,
    DropdownRoute,
} from './DropdownElements'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                {/* <CloseIcon></CloseIcon> */}
            </Icon>

            <DropdownWrapper>

                <DropdownMenu>
                    <DropdownLink to='home'>Home</DropdownLink>
                    <DropdownLink to="/add"> New Question </DropdownLink>
                    <DropdownLink to="/leaderboard"> Leader Board </DropdownLink>
                    <DropdownLink to="/login"> Login </DropdownLink>
                </DropdownMenu>

                <DropdownBtnWrapper>
                    <DropdownRoute to='/login'>Login</DropdownRoute>
                </DropdownBtnWrapper>
            </DropdownWrapper>
            
        </DropdownContainer>
    )
}

export default Dropdown
