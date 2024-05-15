import {
  ERROR_RECEIVE_ORDERS,
  REQUEST_ORDERS,
  RECEIVE_ORDERS,
  ERROR_DELETE_ORDER,
  REQUEST_DELETE_ORDER,
  RECEIVE_DELETE_ORDER,
  ERROR_RECEIVE_ORDER,
  REQUEST_ORDER,
  RECEIVE_ORDER
} from '../constans/actionType';
import list from "../../../misc/constants/languages";

const initialState = {
  list: [],
  totalPage: 0,
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
    case ERROR_RECEIVE_ORDERS: {
      return {
        ...state,
        errors: convertErrors(action.payload),
        isLoading: false,
        isReceive: false,

      };
    }
    case REQUEST_ORDERS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case RECEIVE_ORDERS: {
      const {list, totalPage} = action.payload;
      return {
        ...state,
        list: list || initialState.list,
        totalPage: totalPage || initialState.totalPage,
        isLoading: false,
        isReceive: true,
      };
    }
    case ERROR_RECEIVE_ORDER: {
      return {
        ...state,
        errors: convertErrors(action.payload),
        isLoading: false,
        isReceive: false,

      };
    }
    case REQUEST_ORDER: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case RECEIVE_ORDER: {
      return {
        ...state,
        list: action.payload || initialState.list,
        isLoading: false,
        isReceive: true,
      };
    }
    case ERROR_DELETE_ORDER: {
      return {
        ...state,
        errors: convertErrors(action.payload),
        isLoading: false,
        isReceive: false,
        isError: true
      };
    }
    case REQUEST_DELETE_ORDER: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }

    default: {
      return state;
    }
  }
}
