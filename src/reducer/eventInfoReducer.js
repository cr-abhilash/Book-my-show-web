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

const Event_Component=(state=initialState,action)=>{
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

case 'UPDATE_TUTORIAL_VALUE':{
    return{...state,
        message: "The Event was updated successfully!"
    }
}
case 'DELETE_TUTORIAL':{
    return {...state.currentTutorial}
}

default:
    return state;
}
}
export default Event_Component;