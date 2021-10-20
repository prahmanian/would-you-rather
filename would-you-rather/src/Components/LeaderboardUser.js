import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserImage from './UserImage'
import styled from 'styled-components'
import { 
    ImageWrapper,
    HR,
    SideBorderDetailsWrapper as DetailsWrapper,
    Flag,
    Rank,
    DetailLine,
    ScoreLabel,
    Score,
    ScoreWrapper,
} from './sharedElements'
import { connect } from 'react-redux'

const LeaderboardUserWrapper = styled.div`
    /* display: flex; */
    width: 500px;
    height: 150px;
    border: 1px solid lightgray;
    /* padding: 5px; */
    margin: 10px auto;
    padding: 12px;
    border-radius: 10px;
    overflow: hidden;
    /* flex-direction: row; */
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    position: relative;
    /* padding: 5px 10px; */
    justify-content: space-between;
`

class LeaderboardUser extends Component {

    static propTypes = {
        userId: PropTypes.string.isRequired,
        rank: PropTypes.number.isRequired,
    }

    render() {
        const { userId, name, answered, created, rank } = this.props

        return (
            <LeaderboardUserWrapper>

                <Flag><Rank>#{rank}</Rank></Flag>

                <ImageWrapper><UserImage userId={userId} size={"85px"}/></ImageWrapper>

                <DetailsWrapper>
                    <DetailLine><h3>{name}</h3></DetailLine>
                    <DetailLine><span>Answered questions </span><span>{answered}</span></DetailLine>
                    <HR />
                    <DetailLine><p>Created questions </p><span>{created}</span></DetailLine>
                </DetailsWrapper>

                <ScoreWrapper>
                    <ScoreLabel>Score</ScoreLabel>
                    <Score>{answered+created}</Score>
                </ScoreWrapper>

            </ LeaderboardUserWrapper>

        )
    }   
}

function mapStateToProps({users}, {userId, rank}){
    const user = users[userId]
    return {
        userId,
        user,
        name: user.name,
        answered: Object.keys(user.answers).length,
        created: user.questions.length,
        rank
    }
}
export default connect(mapStateToProps)(LeaderboardUser)