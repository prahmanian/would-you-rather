import React from 'react'
import {useLocation} from 'react-router'

const NotFound = (props) => {
    const { pathname } = useLocation();
    console.log('404 props: ', props.location.state)
    const { from, message } = props.location.state
    const path = from ? from : pathname
    return <>
            <br/>
            <h3>No page found for <code>{path}</code></h3>
            {message && <p>{message}</p>}
            </>
}


export default NotFound