import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from 'react-avatar'
import { connect } from 'react-redux'


// The UserImage component is a custom implementation of the React Avatar component.
// In this implementation, data is passed in as props.


class UserImage extends Component {

    static propTypes = {
        user: PropTypes.object,
        userId: PropTypes.string,
        size: PropTypes.string,
        round: PropTypes.bool,
    }

    render() {

      const {image, name, size, round } = this.props

      return (
        <Avatar name={name} src={image} round={round} size={size} textSizeRatio={2.25}/>
      )
    }
  }
  
function mapStateToProps ({users}, {user, userId, size, round}) {
  const userObject = user ? user : users[userId]
  return {
    image: userObject.avatarURL,
    name: userObject.name,
    size: size ? size : "50px",
    round: round ? round : true,
  }
}

export default connect(mapStateToProps)(UserImage)