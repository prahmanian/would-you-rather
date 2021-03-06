import React, { Component } from 'react'
import { 
    ImageWrapper, 
    HR2 as HR, 
    DetailsWrapper, 
    Label , 
    BottomWrapper,
    Container330 as Container,
    YourVote,
    BlueButton as Button,
    ResultsContainer,
    RadioSelect as Select
} from './sharedElements'
import UserImage from './UserImage'
import {ResultsBar} from './sharedElements'
import {withRouter} from 'react-router'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class Question extends Component {

    state = {
        answer: null
    }



    handleSubmit = (e) => {
        e.preventDefault()
        let data = new FormData(document.querySelector("form"))
        let answer = "";
        for (const entry of data) {
            answer = entry[1];
        };
        console.log('answer: ', answer)
        this.props.dispatch(
            handleSaveAnswer(this.props.id, answer)
        )
        this.setState({answer})
    }

    render() {
        console.log("props: ", this.props)
        const { id, users, questions, authedUser} = this.props
        const question = questions[id]
        if (!question) {return <Redirect to={{
            pathname: '/404',
            state: {from: this.props.location.pathname,
                    message: "There is no existing question with that id."}
        }} />}
        console.log("question: ", question)
        const userObj = users[authedUser]
        const authorObj = users[question.author]
        const optionOneText = question ? question.optionOne.text : 'error'
        const optionTwoText = question ? question.optionTwo.text : 'error'
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        let answer = null
        //If user has answered the question, we updated the state to reflect their response
        Object.keys(userObj.answers).includes(id) ?  answer = userObj.answers[id] : answer = null

        const classResultsOpt1 = answer === "optionOne" ? "selected" : "notselected"
        const classResultsOpt2 = answer === "optionTwo" ? "selected" : "notselected"
        console.log('answer: ', answer)
        return (
            <>
                <Label>
                    {
                        // this.state.answer
                        answer
                        ? <h4 className="question">Asked by {authorObj.name}</h4>
                        : <h4 className="question">{authorObj.name} asks:</h4>
                    }
                </Label>

                <BottomWrapper>

                    <ImageWrapper>
                        <UserImage userId={authorObj.id} size={"120px"}/>
                    </ImageWrapper>

                    {
                        // this.state.answer
                        answer
                        ?
                            <DetailsWrapper>
                                <p className="title">Results:</p>
                                
                                <p> Would you rather...</p>

                                <ResultsContainer className={classResultsOpt1}>
                                    {answer === 'optionOne' && <YourVote>Your Vote</YourVote>}
                                    <p className="Q">{optionOneText}</p>
                                    <ResultsBar answered={optionOneVotes} total={(optionOneVotes+optionTwoVotes)} />
                                </ResultsContainer>

                                <Container><HR /><strong>OR</strong><HR /></Container>

                                <ResultsContainer className={classResultsOpt2}>
                                    {answer === 'optionTwo' && <YourVote>Your Vote</YourVote>}
                                    <p className="Q">{optionTwoText}</p>
                                    <ResultsBar answered={optionTwoVotes} total={(optionOneVotes+optionTwoVotes)} />
                                </ResultsContainer>

                            </DetailsWrapper>

                        :
                            <DetailsWrapper>
                                <p className="title">Would you rather . . .</p>
                                <form id={`selector`} onSubmit={this.handleSubmit}>
                                    <Container>
                                        <Select className="labl" htmlFor={id+"opt1"}>
                                            <input type="radio" id={id+"opt1"} name={id} value="optionOne" className="inputtest" />
                                            <div>{optionOneText}</div>
                                        </Select>
                                    </Container>

                                    <Container><HR /><strong>OR</strong><HR /></Container>

                                    <Container>
                                        <Select className="labl" htmlFor={id+"opt2"}>
                                            <input type="radio" id={id+"opt2"} name={id} value="optionTwo" className="inputtest" />
                                            <div>{optionTwoText}</div>
                                        </Select>
                                    
                                    </Container>

                                    <Button>Submit</Button>
                                </form>

                            </DetailsWrapper>
                    }

                </BottomWrapper>

            </>
        )
    }
}

function mapStateToProps( {authedUser, users, questions}, props) {
    const {id} = props.match.params
        
    return {
        id,
        authedUser, 
        users, 
        questions,
    }
}

export default withRouter(connect(mapStateToProps)(Question))