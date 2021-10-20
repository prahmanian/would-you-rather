import React, { Component } from 'react'
import styled from 'styled-components'
// import { NavLink as Link } from 'react-router-dom'
import { ImageWrapper, HR2 as HR, DetailsWrapper, Label , BottomWrapper} from './sharedElements'
import UserImage from './UserImage'
import {ResultsBar} from './sharedElements'
import {withRouter} from 'react-router'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'



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


class Question extends Component {

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
        // this.setState({answer})
        this.props.dispatch(
            handleSaveAnswer(this.props.id, answer)
        )
        this.setState({answer})
    }




    render() {
        const { authedUser, question, id, userObj, optionOneText, optionTwoText, optionOneVotes, optionTwoVotes} = this.props

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

                                    <Button
                                        // onClick={this.handleSubmit}
                                    >Submit</Button>
                                </form>
                                

                                {/* <Link to="/"><Button>Submit</Button></Link> */}

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

// export default connect(mapStateToProps)(Question)


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