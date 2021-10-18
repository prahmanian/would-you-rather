import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LeaderbardUser from './LeaderboardUser'
import { ComponentWrapper, LI} from './sharedElements'

class Leaderboard extends Component {

    static propTypes = {
        store: PropTypes.object.isRequired,
    }

    state = {
        sorted: []
    }

    

    calculateScore = (userid) => {
        const userobj = this.props.store.users[userid]
        const score = Object.keys(userobj.answers).length + userobj.questions.length
        return score
    }
    
    componentDidMount() {        
        let unsorted = []

        for (const user in this.props.store.users) {
            unsorted.push([user, this.calculateScore(user)])
        }

        const sorted = unsorted.sort((a,b) => (a[1] > b[1]) ? -1 : 1)
        this.setState({sorted})
    }

    render() {
        const { store } = this.props
        const { users } = store

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


export default Leaderboard