const initialState={
    events: [],
      currentEvent: null,
      currentIndex: -1,
      searchTitle: ""
}

const eventListReducer =(state=initialState,action)=>{
    switch(action.type){
    //  when dom loaded on eventlist
    case 'GET_ALL':
    {
    return{...state,
        events: action.value
    }
}
//    when button gets clicked and then passed the search bar value 
    case 'GET_BY_TITLE':
    {
    return{...state,
        events: action.value
    }
}

// when clicked on removeall button
case 'DELETE_ALL':
    {
    return{...state,
       events: action.value
    }
}

// when clicked on any event, set the information about that event inside currentTutorial
case 'CHANGE_EVENT':{
    return{...state,
        currentEvent: action.value
    }
}
// when clicked on any event, set the index of that event inside currentIndex
case 'CHANGE_INDEX':{
    return{...state,
        currentIndex: action.value
    }
}

// Onchange search bar input value
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