import React, { Component } from 'react'
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

export const SideBorderDetailsWrapper = styled.div`
    display: flex;
    background: transparent;
    color: grey;
    width: 250px;
    height: 120px;
    /* font-size: 2rem; */
    align-content: center;
    justify-content: space-between;
    /* padding: 5px; */
    border-left : 1px solid lightgray;
    border-right : 1px solid lightgray;
    /* border-radius: 5px 5px 5px 5px; */
    overflow: hidden;
    margin: auto 5px;
    flex-direction: column;
    padding: 10px;
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

export const ScoreLabel = styled.div`
    background: #efefef;
    border-bottom: 1px solid lightgrey;
    color: #090909;
    width: 130px;
    height: 50px;
    align-content: center;
    justify-content: center;
    padding: 10px;
    text-align: center;
    position: inherit;
    top: 8;
`

export const Score = styled.div`
    border-radius: 50%;
    /* position: relative; */
    background: lightgreen;
    color: white;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    /* align-content: center;
    justify-content: center; */
    padding: 5px;
    margin: auto;
    text-align: center;
`

export const ScoreWrapper = styled.div`
    display: flex;
    /* background: transparent; */
    /* color: grey; */
    width: 125px;
    height: 120px;
    font-size: 1.5rem;
    align-content: center;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 5px;
    overflow: hidden;
    margin: auto;
    flex-direction: column;

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

export const Container330 = styled.div`
    display: flex;
    width: 330px;
    align-content: center;
    justify-content: center;
    /* overflow: hidden; */
    margin: 10px 0;
    text-align: left;

`

export const DetailLine = styled.div`
    display: flex;
    justify-content: space-between;
    /* padding: 5px; */
    width: 100%;
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

export const BlueButton = styled.button`
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

    :disabled {
        background: lightgray;
        color: white;
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

export const Flag = styled.div`
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 0% 0%);
    color: gold;
    background: grey;
    display: block;
    width: 100px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`

export const Rank = styled.span`
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 3;
`

export const YourVote = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 25px;
    background: yellowgreen;
    color: white;
    font-size: 0.75rem;
    justify-content: center;
    text-align: center;
    align-content: center;
    padding-top: 5px;
    position: absolute;
    top: -22px;
    right: -22px;
`

export const ResultsContainer = styled.div`
    display: flex;
    width: 330px;
    align-content: center;
    justify-content: space-between;
    /* overflow: hidden; */
    margin: 5px 0;
    text-align: left;
    flex-direction: column;
    position: relative;
    padding: 10px;
    border-radius: 5px;

    &.selected {
        color: green;
        background: #c0edc0;
        border: 2px solid #88cc00;

    }

    &.notselected {
        color: gray;
        background: #f2f2f2;
        border: 2px solid lightgrey;

    }

    & p {
        /* color: purple; */
        font-size: 1.2rem;
        margin-bottom: 15px;
    }
`

export const RadioSelect = styled.label`
    display: block;
    width: 100%;
    margin: 10px 0;
    
    > input{ /* HIDE RADIO */
        visibility: hidden; /* Makes input not-clickable */
        position: absolute; /* Remove input from document flow */
    }

    > input + div { /* DIV STYLES */
        cursor: pointer;
        border: 1px solid lightgrey;
        border-radius: 5px;
        padding: 5px 0;
        transition: all 0.2s ease-in-out;
        padding-left: 10px;

    }

    > input:hover + div { /* DIV HOVER STYLES */
        cursor: pointer;
        border: 1px solid #256ce1;
        background: #9ec3ff;
        border-radius: 5px;
        padding: 5px 0;
        transition: all 0.2s ease-in-out;
        padding-left: 10px;

    }

    > input:checked + div { /* (RADIO CHECKED) DIV STYLES */
        background-color: #dbfcdb;
        border: 2px solid lightgreen;
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
