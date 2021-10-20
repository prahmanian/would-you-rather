import React, { Component } from 'react'
import LeaderbardUser from './LeaderboardUser'
import { ComponentWrapper, LI} from './sharedElements'
import { connect } from 'react-redux'

class Leaderboard extends Component {

    state = {
        sorted: []
    }

    calculateScore = (userId) => {
        const userobj = this.props.users[userId]
        const score = Object.keys(userobj.answers).length + userobj.questions.length
        return score
    }
    
    componentDidMount() {        
        let unsorted = []

        for (const userId in this.props.users) {
            unsorted.push([userId, this.calculateScore(userId)])
        }

        const sorted = unsorted.sort((a,b) => (a[1] > b[1]) ? -1 : 1)
        this.setState({sorted})
    }

    render() {


        return (
            <ComponentWrapper>
                <h2>Current Leaders</h2>
                {this.state.sorted.map((userTuple, rank) => (
                    <LI key={userTuple[0]}>
                        <LeaderbardUser userId={userTuple[0]} rank={rank+1}/>
                    </LI>
                ))}
            </ComponentWrapper>
        )
    }   
}

function mapStateToProps({users}){
    return {users}
}
export default connect(mapStateToProps)(Leaderboard)