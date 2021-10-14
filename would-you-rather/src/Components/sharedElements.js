import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import UserImage from './UserImage'
import styled from 'styled-components'



export const ImageWrapper = styled.div`
    margin: auto;
    padding: 0 10px;
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

export const DetailsWrapper = styled.div`
    display: flex;
    background: transparent;
    color: grey;
    width: 350px;
    font-size: 1rem;
    align-content: center;
    justify-content: space-between;
    border-left : 1px solid lightgray;
    margin: 10px 5px;
    flex-direction: column;
    padding: 0 5px 0px 10px;
`

export const Label = styled.div`
    display: block;
    width: 500px;
    border: 1px solid lightgrey;
    border-radius: 10px 10px 0px 0px;
    padding: 10px;
    margin: 15px auto 0;
    position: relative;
    top: 0;
    background: #efefef;
`

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    border: 1px solid lightgrey;
    border-radius: 0 0 10px 10px;
    /* padding: 10px; */
    margin: 0 auto;
    position: relative;
    border-top: 0px;
    text-align: left;

`

export const BottomWrapperColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    border: 1px solid lightgrey;
    border-radius: 0 0 10px 10px;
    /* padding: 10px; */
    margin: 0 auto;
    position: relative;
    border-top: 0px;
    text-align: left;

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