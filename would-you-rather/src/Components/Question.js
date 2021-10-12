import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import LeaderboardUser from "./LeaderboardUser"
import {users} from '../starter/_DATA'
import {questions} from '../starter/_DATA'
import { ImageWrapper, HR2 as HR } from './sharedElements'
import UserImage from './UserImage'
import { FaBarcode } from 'react-icons/fa'
import {ResultsBar} from './sharedElements'



const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    border: 1px solid lightgrey;
    border-radius: 0 0 10px 10px;
    /* padding: 10px; */
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
    width: 330px;
    align-content: center;
    justify-content: center;
    /* overflow: hidden; */
    margin: 10px 0;
    text-align: left;

`

const ResultsContainer = styled.div`
    display: flex;
    width: 330px;
    align-content: center;
    justify-content: space-between;
    /* overflow: hidden; */
    margin: 5px 0;
    text-align: left;
    flex-direction: column;
    position: relative;
    padding: 10px;
    border-radius: 5px;

    &.selected {
        color: green;
        background: #c0edc0;
        border: 2px solid #88cc00;

    }

    &.notselected {
        color: gray;
        background: #f2f2f2;
        border: 2px solid lightgrey;

    }

    & .Q {
        /* color: purple; */
        font-size: 1.2rem;
        margin-bottom: 15px;
    }



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
const DetailsWrapper = styled.div`
    display: flex;
    background: transparent;
    color: grey;
    width: 350x;
    /* height: 120px; */
    /* font-size: 2rem; */
    align-content: center;
    justify-content: space-between;
    /* padding: 5px; */
    border-left : 1px solid lightgray;
    /* border-right : 1px solid lightgray; */
    /* border-radius: 5px 5px 5px 5px; */
    /* overflow: hidden; */
    margin: 10px 5px;
    flex-direction: column;
    padding: 0 5px 0px 10px;
`


const YourVote = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 25px;
    background: yellowgreen;
    color: white;
    font-size: 0.75rem;
    justify-content: center;
    text-align: center;
    align-content: center;
    padding-top: 5px;
    position: absolute;
    top: -22px;
    right: -22px;
`


const Select = styled.label`
    display: block;
    width: 100%;
    margin: 10px 0;
    
    > input{ /* HIDE RADIO */
        visibility: hidden; /* Makes input not-clickable */
        position: absolute; /* Remove input from document flow */
    }

    > input + div { /* DIV STYLES */
        cursor: pointer;
        border: 1px solid lightgrey;
        border-radius: 5px;
        padding: 5px 0;
        transition: all 0.2s ease-in-out;
        padding-left: 10px;

    }

    > input:hover + div { /* DIV HOVER STYLES */
        cursor: pointer;
        border: 1px solid #256ce1;
        background: #9ec3ff;
        border-radius: 5px;
        padding: 5px 0;
        transition: all 0.2s ease-in-out;
        padding-left: 10px;

    }

    > input:checked + div { /* (RADIO CHECKED) DIV STYLES */
        background-color: #dbfcdb;
        border: 2px solid lightgreen;
    }

`


class AddQuestion extends Component {

    // static propTypes = {
    //     user: PropTypes.object.isRequired,
    //     size: PropTypes.string,
    //     round: PropTypes.bool,
    // }



    // "8xf0y6ziyjabvozdd253nd": {
    //     id: '8xf0y6ziyjabvozdd253nd',
    //     author: 'sarahedo',
    //     timestamp: 1467166872634,
    //     optionOne: {
    //       votes: ['sarahedo'],
    //       text: 'have horrible short term memory',
    //     },
    //     optionTwo: {
    //       votes: [],
    //       text: 'have horrible long term memory'
    //     }
    //   },

    state = {
        answer: "optionOne"
    }



    render() {

        const tempUser = users.tylermcginnis
        const tempQuestion = questions["8xf0y6ziyjabvozdd253nd"]
        const id = tempQuestion.id
        const optionOneText = tempQuestion.optionOne.text
        const optionTwoText = tempQuestion.optionTwo.text
        const optionOneVotes = tempQuestion.optionOne.votes.length
        const optionTwoVotes = tempQuestion.optionTwo.votes.length

        const classResultsOpt1 = this.state.answer === "optionOne" ? "selected" : "notselected"
        const classResultsOpt2 = this.state.answer === "optionTwo" ? "selected" : "notselected"

        return (
            <>
                <Label>
                    {
                        this.state.answer
                        ? <h4 className="question">Asked by {tempUser.name}</h4>
                        : <h4 className="question">{tempUser.name} asks:</h4>
                    }
                </Label>

                <QuestionWrapper>

                    <ImageWrapper>
                        <UserImage user={tempUser} size={"120px"}/>
                    </ImageWrapper>

                    {
                        this.state.answer

                        ?
                            <DetailsWrapper>
                                <p class="title">Results:</p>
                                
                                <p> Would you rather...</p>

                                <ResultsContainer className={classResultsOpt1}>
                                    {this.state.answer === 'optionOne' && <YourVote>Your Vote</YourVote>}
                                    <p className="Q">{optionOneText}</p>
                                    <ResultsBar answered={optionOneVotes} total={(optionOneVotes+optionTwoVotes)} />
                                </ResultsContainer>

                                <Container><HR /><strong>OR</strong><HR /></Container>

                                <ResultsContainer className={classResultsOpt2}>
                                    {this.state.answer === 'optionTwo' && <YourVote>Your Vote</YourVote>}
                                    <p className="Q">{optionTwoText}</p>
                                    <ResultsBar answered={optionTwoVotes} total={(optionOneVotes+optionTwoVotes)} />
                                </ResultsContainer>

                            </DetailsWrapper>

                        :
                            <DetailsWrapper>
                                <p class="title">Would you rather . . .</p>
                                
                                <Container>
                                    <Select class="labl" for={id+"opt1"}>
                                        <input type="radio" id={id+"opt1"} name={id} value="optionOne" class="inputtest" />
                                        <div>{optionOneText}</div>
                                    </Select>
                                </Container>

                                <Container><HR /><strong>OR</strong><HR /></Container>

                                <Container>
                                    <Select class="labl" for={id+"opt2"}>
                                        <input type="radio" id={id+"opt2"} name={id} value="optionTwo" class="inputtest" />
                                        <div>{optionTwoText}</div>
                                    </Select>
                                
                                </Container>

                                <Link to="/"><Button>Submit</Button></Link>

                            </DetailsWrapper>
                    }

                    

                </QuestionWrapper>

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