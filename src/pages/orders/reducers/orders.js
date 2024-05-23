import {
  ERROR_RECEIVE_ORDER_LIST,
  REQUEST_ORDER_LIST,
  RECEIVE_ORDER_LIST,
  ERROR_DELETE_ORDER,
  REQUEST_DELETE_ORDER,
} from '../constans/actionType';

const initialState = {
  list: [],
  totalOrders: 0,
  isLoading: false,
  isReceive: false,
  errors: [],
};

const convertErrors = errors => errors.map(error => ({
  code: error.code,
  description: error.description,
}));

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case ERROR_RECEIVE_ORDER_LIST: {
      return {
        ...state,
        errors: convertErrors(action.payload),
        isLoading: false,
        isReceive: false,
      };
    }
    case REQUEST_ORDER_LIST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case RECEIVE_ORDER_LIST: {
      const {list, totalOrders} = action.payload;
      return {
        ...state,
        list: list || initialState.list,
        totalOrders: totalOrders || initialState.totalOrders,
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
      };
    }
    case REQUEST_DELETE_ORDER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default: {
      return state;
    }
  }
}
