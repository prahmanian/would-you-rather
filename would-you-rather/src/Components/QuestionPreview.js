import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { ImageWrapper,  DetailsWrapper, Label, BottomWrapper} from './sharedElements'
import UserImage from './UserImage'

import {users} from '../starter/_DATA'
import {questions} from '../starter/_DATA'


const Button = styled.button`
    width: 100%;
    height: 2rem;
    border-radius: 5px;
    margin: 5px 0;
    background: transparent;
    color: #010606;
    border: 2px solid lightgreen;
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



class QuestionPreview extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
    }



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

        
        const question = questions[this.props.id]
        const author = question.author
        const id = this.props.id
        console.log('author', author)
        const user = users[question.author]
        const optionOneText = question.optionOne.text
        const optionTwoText = question.optionTwo.text


        return (
            <>
                <Label>
                    <h4 className="question">{user.name} asks:</h4>
                </Label>

                <BottomWrapper>

                    <ImageWrapper>
                        <UserImage user={user} size={"120px"}/>
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
