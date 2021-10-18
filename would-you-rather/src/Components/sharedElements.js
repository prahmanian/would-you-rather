import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import UserImage from './UserImage'
import styled from 'styled-components'



export const ImageWrapper = styled.div`
    margin: auto;
    align-content: center;
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

export const LI = styled.li`
    list-style: none;
`

export const ComponentWrapper = styled.ul`
    /* background: lightgreen; */
    justify-content: center;
    align-content: center;
    display: block;
    margin-top: 30px;
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
    padding: 10px;
    margin: 0 auto;
    position: relative;
    border-top: 0px;
    text-align: left;

`

export const Container = styled.div`
    display: flex;
    width: 480px;
    align-content: center;
    justify-content: space-between;
    overflow: hidden;
    /* margin: 10px 0; */
    text-align: left;

`

export const Input = styled.input`
    width: 100%;
    height: 2rem;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
`

export const SolidButton = styled.button`
    height: 2rem;
    border-radius: 5px;
    margin: 10px;
    border: 2px solid lightgreen;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: lightgreen;
    color: #010606;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: transparent;
        color: #010606;
    }
`

export const LinkButton = styled.button`
    width: 100%;
    height: 2rem;
    border-radius: 5px;
    margin: 5px 0;
    background: #256ce1;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: lightgreen;
        color: #010606
    }
`

export const OutlineButton = styled.button`
    width: 100%;
    height: 2rem;
    border-radius: 5px;
    margin: 5px 0;
    background: transparent;
    color: #010606;
    border: 2px solid lightgreen;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: lightgreen;
        color: #010606
    }
`
export const ToggleButton = styled.button`
    width: 50%;
    height: 2.5rem;
    /* border-radius: 5px; */
    /* margin: 5px 0; */
    background: white;
    color: lightgreen;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    overflow: hidden;
    font-weight: bolder;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: lightgreen;
        color: #010606
    
    
    }

    &.selected {
        background: lightgreen;
        color: #010606;
    }
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