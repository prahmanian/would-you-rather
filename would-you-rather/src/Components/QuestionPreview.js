import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'
import { ImageWrapper,  DetailsWrapper, Label, BottomWrapper, OutlineButton as Button} from './sharedElements'
import UserImage from './UserImage'

import {users} from '../starter/_DATA'
import {questions} from '../starter/_DATA'

// This QuestionPreview Component renders a card style list element 
// with a preview of a given question text and a link to open up the question.
// This component needs to be passed a question id as props.
// Props: id (string) - the id of the question to preview
// This component needs to read both the users and questions portions of our Redux store.
// TODO connect to Redux store



class QuestionPreview extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
    }


// Example of a Question Entry
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

    render() {

        const id = this.props.id
        const question = questions[id] //TODO Connect to Redux Store
        const user_obj = users[question.author] //TODO connect to Redux Store
        const optionOneText = question.optionOne.text
        const optionTwoText = question.optionTwo.text

        return (
            <>
                <Label>
                    <h4 className="question">{user_obj.name} asks:</h4>
                </Label>

                <BottomWrapper>

                    <ImageWrapper>
                        <UserImage user={user_obj} size={"120px"}/>
                    </ImageWrapper>

                    
                    <DetailsWrapper>
                        <p className="title">Would you rather . . .</p>

                        <p>{optionOneText} ~ or ~  {optionTwoText}</p>

                        <Link to={`/questions/${id}`}><Button>View Question</Button></Link>

                    </DetailsWrapper>
                    
                </BottomWrapper>

            </>
        )
    }
}


export default QuestionPreview
