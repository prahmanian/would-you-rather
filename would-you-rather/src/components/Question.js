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

class Question extends Component {

    state = {
        answer: null
    }

    componentDidMount() {
        const { authedUser, users } = this.props
        const userObj = users[authedUser]
        const id = this.props.match.params.id
        //If user has answered the question, we updated the state to reflect their response
        Object.keys(userObj.answers).includes(id) && this.setState({answer: userObj.answers[id]})
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
        const { id, userObj, optionOneText, optionTwoText, optionOneVotes, optionTwoVotes} = this.props

        const classResultsOpt1 = this.state.answer === "optionOne" ? "selected" : "notselected"
        const classResultsOpt2 = this.state.answer === "optionTwo" ? "selected" : "notselected"

        return (
            <>
                <Label>
                    {
                        this.state.answer
                        ? <h4 className="question">Asked by {userObj.name}</h4>
                        : <h4 className="question">{userObj.name} asks:</h4>
                    }
                </Label>

                <BottomWrapper>

                    <ImageWrapper>
                        <UserImage userId={userObj.id} size={"120px"}/>
                    </ImageWrapper>

                    {
                        this.state.answer

                        ?
                            <DetailsWrapper>
                                <p className="title">Results:</p>
                                
                                <p> Would you rather...</p>

                                <ResultsContainer className={classResultsOpt1}>
                                    {this.state.answer === 'optionOne' && <YourVote>Your Vote</YourVote>}
                                    {console.log('opt1text', optionOneText)}
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
    const question = questions[id]
        
    return {
        id,
        authedUser, 
        users, 
        questions,
        userObj: users[question.author],
        optionOneText: question ? question.optionOne.text : 'error',
        optionTwoText: question ? question.optionTwo.text : 'error',
        optionOneVotes: question.optionOne.votes.length,
        optionTwoVotes: question.optionTwo.votes.length,


    }
}

export default withRouter(connect(mapStateToProps)(Question))