import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'
import {
    HR2 as HR,
    Label,
    LinkButton as Button,
    BottomWrapperColumn,
    Container,
    Input
} from './sharedElements'
import { connect } from 'react-redux'

class AddQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
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

    handleSubmit = (e) => {
        e.preventDefault()
        const {optionOneText, optionTwoText} = this.state
        //TODO Add Question to Store
        console.log('Opt1: ', optionOneText)
        console.log('Opt2: ', optionTwoText)
    }

    render() {
        // console.log(this.state)
        const { optionOneText, optionTwoText } = this.state 
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
                        <Link to="/"><Button type='submit' disabled={optionOneText === '' || optionTwoText === ''}>Submit</Button></Link>
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



// function addTodo () {
//     const input = document.getElementById('todo')
//     const name = input.value
//     input.value = ''

//     store.dispatch(addTodoAction({
//         name,
//         complete: false,
//         id: generateId()
//     }))

// }

// function addGoal () {
//     const input = document.getElementById('goal')
//     const name = input.value
//     input.value = ''

//     store.dispatch(addGoalAction({
//         name,
//         id: generateId()
//     }))
// }

// document.getElementById('todoBtn').addEventListener('click', addTodo)