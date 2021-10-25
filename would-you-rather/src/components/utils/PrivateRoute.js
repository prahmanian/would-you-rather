import React from 'react'
import { Route,  Redirect} from 'react-router-dom'
import { connect } from 'react-redux'


function PrivateRoute({ children, ...rest}) {
    // console.log('children: ', children._self.props.authedUser)
    // const isAuthenticated = (JSON.parse(localStorage.getItem('would-you-rather-authedUser')))
    const isAuthenticated = children._self.props.authedUser
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