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

export const changeEvent = (getValue) => {
  return {
    type: "CHANGE_EVENT",
    value: getValue,
  };
};
export const changeIndex = (getValue) => {
  return {
    type: "CHANGE_INDEX",
    value: getValue,
  };
};

export const searchTitleValue = (getValue) => {
  return {
    type: "SEARCH_TITLE",
    value: getValue,
  };
};
