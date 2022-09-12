import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Left() {
    const dispatch = useDispatch()
    const titlepost = useSelector(state => { return state.title.name1 })
    const descpost = useSelector(state => { return state.description.name2 })
    const range = useSelector(state => { return state.range.name3 })
    const bgColor = useSelector(state => { return state.BgColor.name4 })
    const titleColor = useSelector(state => { return state.titleColor.name5 })
    const descColor = useSelector(state => { return state.descColor.name6 })
    return (
        <div className='left-section'>
            <label className='label'>
                Title
                <input type="text" className='inp' onChange={(e) => {
                    dispatch(
                        {
                            type: "title",
                            payload: {
                                name: e.target.value
                            }
                        })
                }} />
                Description
                <input type="text" className='inp' onChange={(e) => {
                    dispatch(
                        {
                            type: "desc",
                            payload: {
                                name: e.target.value
                            }
                        })
                }} />
                Border Radius
                <input type="range" onChange={(e) => {
                    dispatch(
                        {
                            type: "range",
                            payload: {
                                name: e.target.value
                            }
                        }
                    )
                }} />
                Background Color
                <input type="color" onChange={(e) => {
                    dispatch(
                        {
                            type: "one",
                            payload: {
                                name: e.target.value
                            }
                        }
                    )
                }} />
                Title Color
                <input type="color" onChange={(e) => {
                    dispatch(
                        {
                            type: "two",
                            payload: {
                                name: e.target.value
                            }
                        }
                    )
                }} />
                Description Color
                <input type="color" onChange={(e) => {
                    dispatch({
                        type: "three",
                        payload: {
                            name: e.target.value
                        }
                    })
                }} />
            </label>
        </div>
    )
}

export default Left