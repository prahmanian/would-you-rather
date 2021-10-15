import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {users, questions} from '../starter/_DATA'
import QuestionPreview from './QuestionPreview'
import {ToggleButton as Button} from './sharedElements'

// The Dashboard Component serves as our root for a signed in user.
// The dashboard displays two lists of question previews answered and unanswered by the current user.
// There is also a toggle to switch between the answered /unanswered questions.
// This component takes in the current signed in user's id as a prop.
// Props: authUser (string) - the id of the current user.

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

    static propTypes = {
        authUser: PropTypes.string.isRequired,
    }
    
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
            // TODO users replace with Redux Store
            const userId = this.props.authUser
            const userObj = users[userId]
            // console.log("authUser: ", userObj)

            // TODO questions replace with Redux Store
            const filteredQuestions = this.state.display === 'unanswered'
                ? Object.keys(questions).filter((id) => !Object.keys(userObj.answers).includes(id))
                : Object.keys(questions).filter((id) => Object.keys(userObj.answers).includes(id))
            // console.log('filteredquestions', filteredQuestions)

            return (
                <StyledDashboard>
                    <div className="toggle">
                        <Button 
                            className={this.state.display === 'unanswered' ? "selected" : "default" } 
                            onClick={this.toggleUnanswered}
                        >
                            Unanswered Questions
                        </Button>

                        <Button 
                            className={this.state.display === 'answered' ? "selected" : "default" } 
                            onClick={this.toggleAnswered}
                        >
                            Answered Questions
                        </Button>
                    </div>

                    <ul>
                        {filteredQuestions.map((id) => (<li key={id}><QuestionPreview id={id} /></li>))}
                    </ul>

                </StyledDashboard>
            )
        }
}