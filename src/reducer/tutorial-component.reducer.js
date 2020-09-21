const initialState={
    currentTutorial: {
        id: null,
        title: "",
        description: "",
        Booking: false,
        available: "",
      },
      message: "",
    
}

const reducer4=(state=initialState,action)=>{
    switch(action.type){
    case 'GET_TUTORIAL':
    {
    return{...state,
        currentTutorial: action.value
    }
}
    case 'CHANGE_TITLE':
    {
    return{...state.currentTutorial,
        title: action.value
    }
}

case 'CHANGE_AVAILABLE':
    {
    return{...state.currentTutorial,
        available: action.value
    }
}
case 'CHANGE_DESCRIPTION':{
    return{...state.currentTutorial,
        currentTutorial: action.value
    }
}

case 'UPDATE_BOOKING':{
    return{...state.currentTutorial,
        Booking: action.value
    }
}

default:
    return state;
}
}
export default reducer4;