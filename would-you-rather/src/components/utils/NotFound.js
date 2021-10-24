import React from 'react'
import {useLocation} from 'react-router'

const NotFound = () => {
    const { pathname } = useLocation();

    return <><br/><h3>No page found for <code>{pathname}</code></h3></>
}


export default NotFound