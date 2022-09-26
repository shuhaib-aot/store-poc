 
 import ACTION_CONSTANTS from "../actions/actionsContstants.js"
const initialState = {
   name:"formsflow"
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.NAME_UPDATE:
        return{...state,name:action.payload}
    default:
      return state;
  }
};

export default user;
