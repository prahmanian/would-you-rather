import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'
import {
    HR2 as HR,
    Label,
    LinkButton as Button,
    BottomWrapperColumn,
    Container,
    Input
} from './sharedElements'


class AddQuestion extends Component {

    // static propTypes = {
    //     user: PropTypes.object.isRequired,
    // }



    render() {
        console.log(this.props.store)
        return (
            <>
                <Label><h2>Create a New Question</h2></Label>
                <BottomWrapperColumn>

                    <p>Complete the question:</p>
                    <br/>
                    <strong>Would you rather . . .</strong>
                    <Container><Input id='optionOne' type='text' placeholder='Enter Option One Text Here' /></Container>
                    <Container><HR /><strong>OR</strong><HR /></Container>
                    <Container><Input id='optionTwo' type='text' placeholder='Enter Option Two Text Here' /></Container>
                    <Link to="/"><Button>Submit</Button></Link>



                </BottomWrapperColumn>
            </>
        )
    }
}


export default AddQuestion



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