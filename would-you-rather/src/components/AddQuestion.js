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
import { handleAddQuestion } from '../actions/questions'


class AddQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
        submitted: false
    }

    handleChangeOptionOne = (e) => {
        const text = e.target.value
        this.setState(() => ({
            optionOneText: text, 
        }))
    }

    handleChangeOptionTwo = (e) => {
        const text = e.target.value
        this.setState(() => ({
            optionTwoText: text, 
        }))
    }

    redirect = (path) => {
        return <Redirect to={path} />
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {optionOneText, optionTwoText} = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOneText, optionTwoText))
        
        this.setState({
            optionOneText: '',
            optionTwoText: '',
            submitted: true
        })
    }

    render() {
        const { optionOneText, optionTwoText } = this.state
        
        if (this.state.submitted) {
            return <Redirect to={'/dashboard'} />
        }

        return (
            <>
                <Label><h2>Create a New Question</h2></Label>
                <BottomWrapperColumn>

                    <p>Complete the question:</p>
                    <br/>
                    <strong>Would you rather . . .</strong>
                    <form onSubmit={this.handleSubmit}>
                        <Container><Input id='optionOne' type='text' placeholder='Enter Option One Text Here' value={optionOneText} onChange={this.handleChangeOptionOne}/></Container>
                        <Container><HR /><strong>OR</strong><HR /></Container>
                        <Container><Input id='optionTwo' type='text' placeholder='Enter Option Two Text Here' value={optionTwoText} onChange={this.handleChangeOptionTwo}/></Container>
                        <Button type='submit' disabled={optionOneText === '' || optionTwoText === ''}>Submit</Button>
                    </form>

                </BottomWrapperColumn>
            </>
        )
    }
}

function mapStateToProps( {authedUser}) {
    return {authedUser}
}

export default connect(mapStateToProps)(AddQuestion)