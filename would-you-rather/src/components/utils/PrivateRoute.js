import React from 'react'
import { Route,  Redirect} from 'react-router-dom'
import { connect } from 'react-redux'


function PrivateRoute({ children, ...rest}) {
    const isAuthenticated = (JSON.parse(localStorage.getItem('would-you-rather-authedUser')))
    return (
    <Route {...rest} render={({location}) => {
        return (isAuthenticated)
        ? children
        : <Redirect to={{
            pathname: '/login',
            state: {from: location}
        }} />
    }} />
    )
}

function mapStateToProps({authedUser}){
    return {authedUser}
}
export default connect(mapStateToProps)(PrivateRoute)