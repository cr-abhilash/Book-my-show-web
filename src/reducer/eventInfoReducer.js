const initialState={
    currentEvent: {
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
    case 'GET_EVENT':
    {
    return{...state,
        currentEvent: action.value
    }
}
    case 'CHANGE_TITLE':
    {
    return{...state.currentEvent,
        title: action.value
    }
}

case 'CHANGE_AVAILABLE':
    {
    return{...state.currentEvent,
        available: action.value
    }
}
case 'CHANGE_DESCRIPTION':{
    return{...state.currentEvent,
        currentEvent: action.value
    }
}

case 'UPDATE_BOOKING':{
    return{...state.currentEvent,
        Booking: action.value
    }
}

case 'UPDATE_EVENT_VALUE':{
    return{...state,
        message: "The Event was updated successfully!"
    }
}
case 'DELETE_EVENT':{
    return {...state.currentEvent}
}

default:
    return state;
}
}
export default Event_Component;