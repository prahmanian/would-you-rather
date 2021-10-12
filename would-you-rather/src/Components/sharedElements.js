import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserImage from './UserImage'
import styled from 'styled-components'



export const ImageWrapper = styled.div`
    margin: auto;
`

export const HR = styled.hr`
    background-color: lightgrey;
    height: 1px;
    border-width: 0px;
`

export const HR2 = styled.hr`
    background-color: lightgrey;
    height: 1px;
    border-width: 0px;
    width: 215px;
    margin: auto;
`



export class ResultsBar extends Component {
    render () {
        const { answered, total } = this.props
        const percent = (answered/total*100).toFixed(2)
        return (
            <>
                <div className={"bg"}>
                    <div className={"fg"} style={{width: `${percent}%`}} >
                    </div>
                    {/* <p className={"label"} style={{paddingLeft: `${percent*.9}%`}}>{(answered/total*100).toFixed(0)}%</p> */}
                </div>

                <strong className={"rb"}>{`${answered} out of ${total} votes`}</strong>

            </>
        )
    }
}