import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LeaderbardUser from './LeaderboardUser'
import styled from 'styled-components'

const LeaderboardWrapper = styled.ul`
    /* background: lightgreen; */
    justify-content: center;
    align-content: center;
    display: block;
    margin-top: 30px;
`

const LeaderboardLI = styled.li`
    list-style: none;
`


class Leaderboard extends Component {

    static propTypes = {
        users: PropTypes.object.isRequired,
    }

    state = {
        sorted: []
    }

    
    calculateScore = (userid) => {
        const userobj = this.props.users[userid]
        const score = Object.keys(userobj.answers).length + userobj.questions.length
        return score
    }
    
    componentDidMount() {        
        let unsorted = []

        for (const user in this.props.users) {
            unsorted.push([user, this.calculateScore(user)])
        }

        const sorted = unsorted.sort((a,b) => (a[1] > b[1]) ? -1 : 1)
        this.setState({sorted})
    }

    render() {
        const { users } = this.props

        return (
            <LeaderboardWrapper>
                <h2>Current Leaders</h2>
                {this.state.sorted.map((userkey, rank) => (
                    <LeaderboardLI key={userkey[0]}>
                        <LeaderbardUser user={users[userkey[0]]} rank={rank+1}/>
                    </LeaderboardLI>
                ))}
            </LeaderboardWrapper>
        )
    }   
}


export default Leaderboard