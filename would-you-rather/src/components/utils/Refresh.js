import React, { Component } from 'react'
import {withRouter, Redirect} from 'react-router'

class Refresh extends Component {

    render() {
        const { path } = this.props.match.params
        console.log('refresh to: ', path)
        return (
            <Redirect  to={`/${path}`} />
        )}
}

export default withRouter(Refresh)