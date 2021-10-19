import React, { Component } from 'react'
import LeaderbardUser from './LeaderboardUser'
import { ComponentWrapper, LI} from './sharedElements'
import { connect } from 'react-redux'

class Leaderboard extends Component {

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
        // console.log('sorted: ', sorted)
        this.setState({sorted})
    }

    render() {
        const { users } = this.props

        return (
            <ComponentWrapper>
                <h2>Current Leaders</h2>
                {this.state.sorted.map((userkey, rank) => (
                    <LI key={userkey[0]}>
                        <LeaderbardUser user={users[userkey[0]]} rank={rank+1}/>
                    </LI>
                ))}
            </ComponentWrapper>
        )
    }   
}

function mapStatetoProps({users}){
    return {users}
}
export default connect(mapStatetoProps)(Leaderboard)