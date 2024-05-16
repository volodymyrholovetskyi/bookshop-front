import {
  ERROR_ADD_ORDER,
  REQUEST_ADD_ORDER,
  RESPONSE_ADD_ORDER,
} from '../constans/actionType';
import list from "../../../misc/constants/languages";

const initialState = {
  order: {},
  isLoading: false,
  isReceive: false,
  errors: [],
};

const convertErrors = (errors) => errors.map(error => ({
  code: error.statusCode,
  description: error.message,
}));

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case ERROR_ADD_ORDER: {
      return {
        ...state,
        errors: convertErrors(action.payload),
        isLoading: false,
        isReceive: false,
        isError: true
      };
    }
    case REQUEST_ADD_ORDER: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }

    case RESPONSE_ADD_ORDER: {
      return {
        ...state,
        order: action.payload || initialState.order,
        isLoading: false,
        isReceive: true,
      };
    }

    default: {
      return state;
    }
  }
}
