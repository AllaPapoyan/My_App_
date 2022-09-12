export const initialTitle={name1:""};

export function titleReducer(state=initialTitle,action){
    if(action.type === "title"){
        return{
            ...state,
            name1: action.payload.name
        }
    }
    return state
};


export const initialDescription={name2:""};

export function descriptionReductor(state=initialDescription,action){
    if(action.type==="desc"){
        return{
            ...state,
            name2:action.payload.name
        }
    }
    return state
}

export const initialRange = { name3: "" };

export function rangeReducer(state=initialRange, action){
    if(action.type==="range"){
        return{
            ...state,
            name3:action.payload.name
        }
    }
    return state
};


export const initialBgColor = { name4: "" };

export function BgColorReducer(state=initialBgColor,action){
    if(action.type === "one"){
        return {
            ...state,
            name4:action.payload.name
        }
    }
    return state
};


export const initialTitleColor={name5:""};
export function TitleColorReducor(state=initialTitleColor,action){
    if(action.type === "two"){
        return {
            ...state,
            name5:action.payload.name
        }
    }
    return state
};

export const initialDescColor={name6:""};

export function descColorReducor(state=initialDescColor,action){

    if(action.type === "three"){
        return {
            ...state,
            name6:action.payload.name
        }
    }
    return state
};


