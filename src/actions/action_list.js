import EventDataService from "../services/eventService";

export const getAllValue = () => {
  return (dispatch) => {
    EventDataService.getAll()
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "GET_ALL", value: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

// get called when click on search button
export const findByTitleValue = (titleName) => {
  console.log(titleName);
  return (dispatch) => {
    EventDataService.findByTitle(titleName)
      .then((response) => {
        console.log(response.data, "data");
        dispatch({ type: "GET_BY_TITLE", value: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

// when clicked on removeall button
export const removeAllValue = () => {
  return (dispatch) => {
    EventDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "DELETE_ALL", value: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

// when clicked on any event pass that event inforamation to it
export const changeEvent = (getValue) => {
  return {
    type: "CHANGE_EVENT",
    value: getValue,
  };
};
// when clicked on any event passed that event index value to it
export const changeIndex = (getValue) => {
  return {
    type: "CHANGE_INDEX",
    value: getValue,
  };
};

// searchbar Value onChange action
export const searchTitleValue = (getValue) => {
  return {
    type: "SEARCH_TITLE",
    value: getValue,
  };
};
