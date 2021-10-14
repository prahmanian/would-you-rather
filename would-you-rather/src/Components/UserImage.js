import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from 'react-avatar'


// The UserImage component is a custom implementation of the React Avatar component.
// In this implementation, data is passed in as props.


class UserImage extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        size: PropTypes.string,
        round: PropTypes.bool,
    }



    render() {
      
      const image = this.props.user.avatarURL
      const size = this.props.size ? this.props.size : "50px"
      const name = this.props.user.name
      const round = this.props.round ? this.props.round : true
      
      // console.log("user", this.props.user)
  
      return (
        <Avatar name={name} src={image} round={round} size={size} textSizeRatio={2.25}/>

        
      )
    }
  }
  

export default UserImage