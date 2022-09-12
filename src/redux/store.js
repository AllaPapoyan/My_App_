 import { combineReducers, createStore } from "redux"
import { BgColorReducer, descColorReducor, descriptionReductor, initialBgColor, initialDescColor, initialDescription, initialRange, initialTitle, initialTitleColor, rangeReducer, TitleColorReducor, titleReducer } from "./leftSlicer"
 
 const store=createStore(combineReducers({
    title :titleReducer,
    description:descriptionReductor,
    range:rangeReducer,
    BgColor:BgColorReducer,
    titleColor:TitleColorReducor,
    descColor:descColorReducor
 }),{
    title:initialTitle,
    description:initialDescription,
    range:initialRange,
    bgColor:initialBgColor,
    titleColor:initialTitleColor,
    descColor:initialDescColor,
 }

 )
 export default store