import React from 'react'
import { useSelector } from 'react-redux'
function Right() {
    const titlepost=useSelector(state =>{return state.title.name1})
    const descpost= useSelector(state=>{return state.description.name2})
    const range= useSelector(state=>{return state.range.name3})
    const bgColor=useSelector(state=>{return state.BgColor.name4})
    const titleColor  = useSelector(state=>{return state.titleColor.name5})
    const descColor =useSelector(state=>{return state.descColor.name6})
  return (
    <section className='right-section'>
    <div className='note' style={{borderRadius:`${range}px`,
backgroundColor:bgColor}} >
        <h2>My NoTes</h2>
        <h3 style={{color:titleColor}}>{titlepost}</h3>
        <p style={{color:descColor}}>{descpost}</p>
    </div>
    
</section>
  )
}

export default Right