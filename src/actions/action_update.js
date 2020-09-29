import EventDataService from "../services/eventService";

export const getEventValue = (id) => {
  return (dispatch) => {
    EventDataService.get(id)
      .then((response) => {
        console.log(response.data, "action");
        dispatch({ type: "GET_EVENT", value: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const changeTitle = (getValue) => {
  return {
    type: "CHANGE_TITLE",
    value: getValue,
  };
};
export const changeDescription = (getValue) => {
  return {
    type: "CHANGE_DESCRIPTION",
    value: getValue,
  };
};

export const changeAvailable = (getValue) => {
  return {
    type: "CHANGE_AVAILABLE",
    value: getValue,
  };
};

export const updateBookingValue = (id, data) => {
  return (dispatch) => {
    EventDataService.update(id, data)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "UPDATE_BOOKING", value: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const updateEventValue = (id, currentEvent) => {
  return (dispatch) => {
    EventDataService.update(id, currentEvent)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "UPDATE_EVENT_VALUE", value: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
export const deleteEventValue = (deleteEvent) => {
  return (dispatch) => {
    EventDataService.delete(deleteEvent)
      .then((response) => {
        console.log(response.data, "afterDElete");
        dispatch({ type: "DELETE_EVENT", value: "" });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
