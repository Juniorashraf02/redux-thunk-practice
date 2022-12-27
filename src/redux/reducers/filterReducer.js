import { TOGGLE_BRANDS, TOGGLE_STOCKS } from "../actionTypes/actionTypes";

export const initialState = {
  filters: {
    brands: [],
    stock: false,
  },
  keywords: "",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BRANDS:
      if (!state.filters.brands.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: [...state.filters.brands, action.payload],
          },
        };
      }
      else {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: state.filters.brands.filter(brand=>brand!==action.payload),
          },
        };
      }

    case TOGGLE_STOCKS:
      return {
        ...state,
        filters: {
            ...state.filters,
            stock: !state.filters.stock,
        }
      };

    default:
      return state;
  }
};
