import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

import {MdCompareArrows} from 'react-icons/md'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    /* justify-content: space-between; */
    justify-content: flex-start;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 1000;

`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`

export const Bars =styled(FaBars)`
    display: none;
    color: #fff;
    z-index: 10000;

    @media screen and (max-width: 868px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const Close =styled(FaTimes)`
    display: none;
    color: #fff;
    z-index: 10000;

    @media screen and (max-width: 868px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const IconLogo =styled(MdCompareArrows)`
    display: block;
    color: #fff;
    font-size: 4rem;
    top: 0;
    right: 0;
    z-index: 1000;
    cursor: pointer;
`

export const Logo =styled.img`
    display: block;
    color: #fff;
    font-size: 4rem;
    top: 0;
    right: 0;
    z-index: 1000;
    width: 100px;
    cursor: pointer;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    width: 100vw;
    white-space: nowrap;


    @media screen and (max-width: 868px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    justify-content: flex-end;
    width: 100vw;

    @media screen and (Max-width: 868px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 40px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606
    }
`

export const Welcome = styled.div`
    color: white;
    display: inline-flex;
    width: 110%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    justify-content: flex-end;
    padding: 10px 10px 10px 20px;
    margin-left: 10px;
    white-space: nowrap;

    p {
        margin-right: 10px;
    }

    .navBtn {
        margin-left: 10px;
    }

    @media screen and (Max-width: 868px) {
        display: none;
    }

`

export const LogoutBtn = styled.button`
    display: flex;
    align-items: center;
    margin-right: 24px;

    justify-content: flex-end;
    width: 100vw;

    @media screen and (Max-width: 868px) {
        display: none;
    }
`