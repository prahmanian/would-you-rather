import React, { Component } from 'react'
import { Redirect } from 'react-router-dom' 
import {
    HR2 as HR,
    Label,
    LinkButton as Button,
    BottomWrapperColumn,
    Container,
    Input
} from './sharedElements'
import { connect } from 'react-redux'
import { handleAddUser } from '../actions/users'
import Avatar from 'react-avatar'


class AddQuestion extends Component {

    state = {
        name: '',
        avatarURL: '',
        submitted: false
    }

    handleChangeName = (e) => {
        const text = e.target.value
        this.setState(() => ({
            name: text, 
        }))
    }

    handleChangeAvatarURL = (e) => {
        const text = e.target.value
        this.setState(() => ({
            avatarURL: text, 
        }))
    }

    // redirect = (path) => {
    //     return <Redirect to={path} />
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        const {name, avatarURL} = this.state
        const { dispatch } = this.props

        dispatch(handleAddUser(name, avatarURL))
        
        this.setState({
            name: '',
            avatarURL: '',
            submitted: true
        })
    }

    render() {
        const { name, avatarURL } = this.state
        
        if (this.state.submitted) {
            return <Redirect to={'/login'} />
        }

        return (
            <>
                <Label><h2>Sign Up</h2></Label>
                <BottomWrapperColumn>

                    <h4>Complete the user registration form:</h4>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        Name
                        <Container><Input id='name' type='text' placeholder='First Last' value={name} onChange={this.handleChangeName}/></Container>
                        Public URL to Avatar
                        <Container><Input id='avatarURL' type='url' placeholder='https://...' value={avatarURL} onChange={this.handleChangeAvatarURL}/></Container>
                        <Button type='submit' disabled={name === '' || avatarURL === ''}>Submit</Button>
                    </form>
                    <br/>
                    
                    {this.state.avatarURL && <><h4>Preview:</h4><Avatar name={this.state.name} src={this.state.avatarURL} round={true} size={'200px'} textSizeRatio={2.25}/></>}
                    

                </BottomWrapperColumn>
            </>
        )
    }
}

function mapStateToProps( {authedUser}) {
    return {authedUser}
}

export default connect(mapStateToProps)(AddQuestion)