import TutorialDataService from "../services/tutorial.service";

export const createTitle = (getValue) => {
  return {
    type: "CREATE_TITLE",
    value: getValue,
  };
};

export const createTableValue = (data) => {
  return (dispatch) => {
    TutorialDataService.create(data)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "CREATE_TABLE", value: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const newEvent = () => {
  return {
    type: "NEW_EVENT",
    value: "",
  };
};

export const changeDescriptionAnother = (getValue) => {
  return {
    type: "CHANGE_DESCRIPTION1",
    value: getValue,
  };
};

export const changeAvailableAnother = (getValue) => {
  return {
    type: "CHANGE_AVAILABLE1",
    value: getValue,
  };
};
