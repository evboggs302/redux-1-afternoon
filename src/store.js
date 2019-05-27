import { createStore } from "redux";

const initialState = {
  name: "",
  category: "",
  auth_first: "",
  auth_last: "",
  ingreds: [],
  rules: [],
  recipe: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CAT = "UPDATE_CAT";
export const UPDATE_FIRST = "UPDATE_FIRST";
export const UPDATE_LAST = "UPDATE_LAST";
export const UPDATE_INGREDS = "UPDATE_INGREDS";
export const RULES = "RULES";
export const RECIPE = "RECIPE";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        name: [...state, { name: action.payload }]
      };
    case UPDATE_CAT:
      return {
        recipe: [...state, { category: action.payload }]
      };
    case UPDATE_FIRST:
      return {
        recipe: [...state, { auth_first: action.payload }]
      };
    case UPDATE_LAST:
      return {
        recipe: [...state, { auth_last: action.payload }]
      };
    case UPDATE_INGREDS:
      return {
        recipe: [...state, { ingreds: action.payload }]
      };
    case RULES:
      const list = [...state.rules, action.payload];
      return { ...state, rules: list };
    case RECIPE:
      const { name, category, auth_first, auth_last, ingreds, rules } = state;
      const items = {
        name,
        category,
        auth_first,
        auth_last,
        ingreds,
        rules
      };
      const newRECIPE = [...state.recipe, items];
      return { ...state, recipe: newRECIPE };
    default:
      return state;
  }
}

export default createStore(reducer);
