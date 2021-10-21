import React, { Component } from 'react'
import styled from 'styled-components'
import QuestionPreview from './QuestionPreview'
import {ToggleButton as Button} from './sharedElements'
import { connect } from 'react-redux'

// The Dashboard Component serves as our root for a signed in user.
// The dashboard displays two lists of question previews answered and unanswered by the current user.
// There is also a toggle to switch between the answered /unanswered questions.
// This component takes in the current signed in user's id as a prop.
// Props: authUser (string) - the id of the current user.

const StyledDashboard = styled.div`
    width: 550px;
    /* max-height: 1000px; */
    overflow: scroll;
    margin: 10px auto;
    border: 2px solid lightgrey;
    border-radius: 10px;

    & .p {
        color: blue;
    }

    & .toggle {
        border-bottom: 2px solid lightgrey;
        margin-bottom: 10px;
        position: relative;
    }

    & ul {
        margin: 10px;
    }

    & .ul {
        overflow: scroll;
        max-height: 950px;
    }
`


class Dashboard extends Component {
    
    state ={
        display: "unanswered",
    }

    toggleUnanswered = () => {
        this.setState({display:"unanswered"})
    }

    toggleAnswered = () => {
        this.setState({display:"answered"})
    }

    render () {
        const { questionIds, userAnswers } = this.props
        console.log('userAnswers ', userAnswers)
        let filteredQuestions = this.state.display === 'unanswered'
            ? questionIds.filter((id) => !userAnswers.includes(id))
            : questionIds.filter((id) => userAnswers.includes(id))

        //sort with newest questions at top
        filteredQuestions.sort((a,b) => (a.timestamp > b.timestamp) ? 1 : -1)

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

                <div className="ul">
                    <ul>
                        {filteredQuestions.map((id) => (<li key={id}><QuestionPreview id={id} />{console.log(id, this.props.questions[id].timestamp, new Date(this.props.questions[id].timestamp))}</li>))}
                    </ul>
                </div>
                

            </StyledDashboard>
        )
        }
}
function mapStateToProps({authedUser, users, questions}){

    return {
        userAnswers: Object.keys(users[authedUser].answers),
        questionIds: Object.keys(questions),
        questions
    }
}

export default connect(mapStateToProps)(Dashboard)