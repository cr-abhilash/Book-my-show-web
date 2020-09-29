const initialState = {
    id: null,
    title: "",
    description: "",
    available: "",
    Booking: false,
  
    submitted: false,
  };
  
  const addEvent = (state = initialState, action) => {
    switch (action.type) {
      case "CREATE_TITLE": {
        return { ...state, title: action.value };
      }
      case "CREATE_TABLE": {
        return {
          ...state,
          available: action.value.available,
          id: action.value.id,
          title: action.value.title,
          description: action.value.description,
          Booking: action.value.Booking,
  
          submitted: true,
        };
      }
  
      case "NEW_EVENT": {
        return {
          ...state,
          id: null,
          title: "",
          description: "",
          Booking: false,
  
          submitted: false,
        };
      }
  
      case "CHANGE_AVAILABLE1": {
        return { ...state, available: action.value };
      }
      case "CHANGE_DESCRIPTION1": {
        return { ...state, description: action.value };
      }
  
      default:
        return state;
    }
  };
  
  export default addEvent;
  