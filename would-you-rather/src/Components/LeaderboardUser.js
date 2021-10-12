import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserImage from './UserImage'
import styled from 'styled-components'
import { ImageWrapper, HR } from './sharedElements'


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

const Score = styled.div`
    border-radius: 50%;
    /* position: relative; */
    background: lightgreen;
    color: white;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    /* align-content: center;
    justify-content: center; */
    padding: 5px;
    margin: auto;
    text-align: center;
`

const ScoreLabel = styled.div`

    background: lightgray;
    /* color: black; */
    width: 130px;
    height: 50px;
    /* font-size: 1rem; */
    align-content: center;
    justify-content: center;
    padding: 5px;
    /* padding: 5px; */
    text-align: center;
    position: inherit;
    top: 8;


`

const ScoreWrapper = styled.div`
    display: flex;
    background: transparent;
    color: grey;
    width: 125px;
    height: 120px;
    font-size: 1.5rem;
    align-content: center;
    justify-content: space-between;
    /* padding: 5px; */
    border: 1px solid lightgray;
    border-radius: 5px 5px 5px 5px;
    overflow: hidden;
    /* margin: 10px 15px 20px 30px; */
    margin: auto;
    flex-direction: column;

`

const DetailsWrapper = styled.div`
    display: flex;
    background: transparent;
    color: grey;
    width: 250px;
    height: 120px;
    /* font-size: 2rem; */
    align-content: center;
    justify-content: space-between;
    /* padding: 5px; */
    border-left : 1px solid lightgray;
    border-right : 1px solid lightgray;
    /* border-radius: 5px 5px 5px 5px; */
    overflow: hidden;
    margin: auto 5px;
    flex-direction: column;
    padding: 10px;
`



const Flag = styled.div`
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 0% 0%);
    color: gold;
    background: grey;
    display: block;
    width: 100px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`

const Rank = styled.span`
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 3;
`

const DetailLine = styled.div`
    display: flex;
    justify-content: space-between;
    /* padding: 5px; */
    width: 100%;
`
// const ImageWrapper = styled.div`
//     margin: auto;
// `

class LeaderboardUser extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
    }

    render() {
        const { user, rank} = this.props
        const name = this.props.user.name
        const answered = Object.keys(user.answers).length
        const created = user.questions.length

        return (
            <LeaderboardUserWrapper>

                <Flag><Rank>#{rank}</Rank></Flag>

                <ImageWrapper><UserImage user={user} size={"85px"}/></ImageWrapper>

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


export default LeaderboardUser
