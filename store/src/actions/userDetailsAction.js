import ACTION_CONSTANTS from "./actionsContstants";

export const updateUserName = (name) => (dispatch) => {
  dispatch({
    type: ACTION_CONSTANTS.NAME_UPDATE,
    payload: name,
  });
};