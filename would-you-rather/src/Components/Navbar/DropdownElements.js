import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
// import {MdCompareArrows} from 'react-icons/md'

export const DropdownContainer = styled.aside`
    position: fixed;
    z-index: 9;
    width: 100%;
    height: 60%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    transition: 0.2s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0px' : '-100%')};

`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`

export const DropdownWrapper = styled.div`
    color: #fff;
`

export const DropdownMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;
    justify-items: center;
    padding-top: 20px;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }

`

export const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const DropdownBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const DropdownRoute = styled(Link)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

`