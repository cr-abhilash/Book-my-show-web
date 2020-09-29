const initialState={
    tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
}

const eventListReducer=(state=initialState,action)=>{
    switch(action.type){
    case 'GET_ALL':
    {
    return{...state,
        tutorials: action.value
    }
}
    case 'GET_BY_TITLE':
    {
    return{...state,
        tutorials: action.value
    }
}

case 'DELETE_ALL':
    {
    return{...state,
        tutorials: action.value
    }
}
case 'CHANGE_TUTORIAL':{
    return{...state,
        currentTutorial: action.value
    }
}

case 'CHANGE_INDEX':{
    return{...state,
        currentIndex: action.value
    }
}

case 'SEARCH_TITLE':{
    return{...state,
        searchTitle: action.value
    }
}

default:
    return state;
}
}
export default eventListReducer;