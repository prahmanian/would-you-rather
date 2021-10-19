import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'
import { ImageWrapper,  DetailsWrapper, Label, BottomWrapper, OutlineButton as Button} from './sharedElements'
import UserImage from './UserImage'
import { connect } from 'react-redux'

// This QuestionPreview Component renders a card style list element 
// with a preview of a given question text and a link to open up the question.
// This component needs to be passed a question id as props.
// Props: id (string) - the id of the question to preview
// This component needs to read both the users and questions portions of our Redux store.


class QuestionPreview extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
    }

    render() {
        const { id, authorId, authorName, optionOneText, optionTwoText } = this.props

        return (
            <>
                <Label>
                    <h4 className="question">{authorName} asks:</h4>
                </Label>

                <BottomWrapper>

                    <ImageWrapper>
                        <UserImage userId={authorId} size={"120px"}/>
                    </ImageWrapper>

                    
                    <DetailsWrapper>
                        <p className="title">Would you rather . . .</p>

                        <p><span style={{color: "#009DE4"}}>{optionOneText}</span> /or/ <span style={{color: "#F23B3C"}}>{optionTwoText}</span></p>

                        <Link to={`/questions/${id}`}><Button>View Question</Button></Link>

                    </DetailsWrapper>
                    
                </BottomWrapper>

            </>
        )
    }
}

function mapStateToProps({users, questions}, {id}) {
    const question = questions[id]
    const authorId = question.author
    return {
        id,
        authorId,
        authorName: users[authorId].name,
        optionOneText: question.optionOne.text,
        optionTwoText: question.optionTwo.text,
    }}

export default connect(mapStateToProps)(QuestionPreview)
