import React from 'react'
import LeaderbardUser from './LeaderboardUser'
import { ComponentWrapper, LI} from './sharedElements'
import { connect } from 'react-redux'


function Leaderboard (props) {
    const { users } = props

    const calculateScore = (userId) => {
        const userobj = users[userId]
        const score = Object.keys(userobj.answers).length + userobj.questions.length
        return score
    }

    let unsorted = []

    // creating unsorted list of tuples, [userId, score]
    for (const userId in users) {
        unsorted.push([userId, calculateScore(userId)])
    }

    // descending sort with the highest score at the top
    const sorted = unsorted.sort((a,b) => (a[1] > b[1]) ? -1 : 1)

        return (
            <ComponentWrapper>
                <h2>Current Leaders</h2>
                {/* Rendering soreted list of LeaderboardUser components */}
                {sorted.map((userTuple, rank) => (
                    <LI key={userTuple[0]}>
                        <LeaderbardUser userId={userTuple[0]} rank={rank+1}/>
                    </LI>
                ))}
            </ComponentWrapper>
        )

}

function mapStateToProps({users}){
    return {users}
}
export default connect(mapStateToProps)(Leaderboard)