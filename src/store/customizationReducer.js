// project imports
import config from "./../config";

// action - state management
import * as actionTypes from "./actions";

export const initialState = {
  isOpen: [], // for active default menu
  borderRadius:
    localStorage.getItem("borderRadius") === null
      ? config.borderRadius
      : localStorage.getItem("borderRadius"),
  mode:
    localStorage.getItem("theme") === null
      ? config.mode
      : localStorage.getItem("theme"),
  opened: true,
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id],
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened,
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius,
      };
    case actionTypes.SET_THEME:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
};

export default customizationReducer;
