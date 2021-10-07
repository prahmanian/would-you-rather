import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

const HR = styled.hr`
    background-color: lightgrey;
    height: 1px;
    border-width: 0px;
    width: 215px;
    margin: auto;
`

const AddQuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    border: 1px solid lightgrey;
    border-radius: 0 0 10px 10px;
    padding: 10px;
    margin: 0 auto;
    position: relative;
    border-top: 0px;
    text-align: left;
    
`

const Label = styled.div`
    display: block;
    width: 500px;
    border: 1px solid lightgrey;
    border-radius: 10px 10px 0px 0px;
    padding: 10px;
    margin: 15px auto 0;
    position: relative;
    top: 0;
    background: lightgrey;
    
`

const Container = styled.div`
    display: flex;
    width: 480px;
    align-content: center;
    justify-content: space-between;
    overflow: hidden;
    /* margin: 10px 0; */
    text-align: left;

`

const Input = styled.input`
    width: 100%;
    height: 2rem;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
`
const Button = styled.button`
    width: 100%;
    height: 2rem;
    border-radius: 5px;
    margin: 5px 0;
    background: #256ce1;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: lightgreen;
        color: #010606
    }
`


// const NavBtnLink = styled(Link)`
//     border-radius: 5px;
//     background: #256ce1;
//     /* padding: 10px 22px; */
//     color: #fff;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #010606
//     }
// `

class AddQuestion extends Component {

    // static propTypes = {
    //     user: PropTypes.object.isRequired,
    //     size: PropTypes.string,
    //     round: PropTypes.bool,
    // }



    render() {

        return (
            <>
                <Label><h2>Create a New Question</h2></Label>
                <AddQuestionWrapper>

                    <p>Complete the question:</p>
                    <br/>
                    <strong>Would you rather . . .</strong>
                    <Container><Input id='optionOne' type='text' placeholder='Enter Option One Text Here' /></Container>
                    <Container><HR /><strong>OR</strong><HR /></Container>
                    <Container><Input id='optionTwo' type='text' placeholder='Enter Option Two Text Here' /></Container>
                    <Link to="/"><Button>Submit</Button></Link>



                </AddQuestionWrapper>
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