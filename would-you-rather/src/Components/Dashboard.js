import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

import {users} from '../starter/_DATA'
import {questions} from '../starter/_DATA'

import Question from './Question'

const StyledDashboard = styled.div`
    /* background: palegoldenrod; */
    width: 550px;
    max-height: 1000px;
    overflow: scroll;
    /* color: blue; */
    margin: 10px auto;
    border: 2px solid lightgrey;
    border-radius: 10px;

    & .p {
        color: blue;
    }

    & .toggle {
        border-bottom: 2px solid lightgrey;
        margin-bottom: 10px;
    }

    & ul {
        margin: 10px;
    }
`
const Button = styled.button`
    width: 50%;
    height: 2.5rem;
    /* border-radius: 5px; */
    /* margin: 5px 0; */
    background: white;
    color: lightgreen;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    overflow: hidden;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: lightgreen;
        color: #010606
    
    
    }

    &.selected {
        background: lightgreen;
        color: #010606;
    }

`

// sarahedo: {
//     id: 'sarahedo',
//     name: 'Sarah Edo',
//     avatarURL: "https://pbs.twimg.com/profile_images/1281071936605323266/wc1KRZLK_400x400.jpg",
//     answers: {
//       "8xf0y6ziyjabvozdd253nd": 'optionOne',
//       "6ni6ok3ym7mf1p33lnez": 'optionTwo',
//       "am8ehyc8byjqgar0jgpub9": 'optionTwo',
//       "loxhs1bqm25b708cmbf3g": 'optionTwo'
//     },
//     questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
//   },


// let questions = {
//     "8xf0y6ziyjabvozdd253nd": {
//       id: '8xf0y6ziyjabvozdd253nd',
//       author: 'sarahedo',
//       timestamp: 1467166872634,
//       optionOne: {
//         votes: ['sarahedo'],
//         text: 'have horrible short term memory',
//       },
//       optionTwo: {
//         votes: [],
//         text: 'have horrible long term memory'
//       }
//     },

export default class Dashboard extends Component {
    
    state ={
        display: "unanswered"
    }

    toggleUnanswered = () => {
        this.setState({display:"unanswered"})
    }

    toggleAnswered = () => {
        this.setState({display:"answered"})
    }

    render () {
            const tempUser = this.props.authUser
            console.log("user", tempUser)

            const filteredQuestions = this.state.display === 'unanswered'
                ? Object.keys(questions).filter((id) => !Object.keys(tempUser.answers).includes(id))
                : Object.keys(questions).filter((id) => Object.keys(tempUser.answers).includes(id))

            console.log('filteredquestions', filteredQuestions)
            return (
                <StyledDashboard>
                    <div className="toggle">
                        <Button className={this.state.display === 'unanswered' ? "selected" : "default" } onClick={this.toggleUnanswered}>Unanswered Questions</Button>
                        <Button className={this.state.display === 'answered' ? "selected" : "default" } onClick={this.toggleAnswered}>Answered Questions</Button>
                    </div>
                    
                    <ul>
                        {/* {Object.keys(questions).filter((id) => Object.keys(tempUser.answers).includes(id))} */}
                        {filteredQuestions.map((id) => (<li key={id}><Question></Question>{id}</li>))}

                    </ul>
                    <p>{tempUser.name}</p>

                    


                </StyledDashboard>
            )
        }
}