import {
  ERROR_RECEIVE_ORDER_LIST,
  REQUEST_ORDER_LIST,
  RECEIVE_ORDER_LIST,
  ERROR_DELETE_ORDER,
  REQUEST_DELETE_ORDER,
  ERROR_RECEIVE_ORDER,
  REQUEST_ORDER,
  RECEIVE_ORDER,
  ERROR_ADD_ORDER,
  REQUEST_ADD_ORDER,
  RESPONSE_ADD_ORDER,
  ERROR_UPDATE_ORDER,
  REQUEST_UPDATE_ORDER,
  RESPONSE_UPDATE_ORDER
} from '../constans/actionType';

const initialState = {
  list: [],
  order: {},
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
        order: action.payload,
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

    case ERROR_ADD_ORDER: {
      return {
        ...state,
        errors: convertErrors(action.payload),
        isLoading: false,
        isReceive: false,
      };
    }
    case REQUEST_ADD_ORDER: {
      return {
        ...state,
        isLoading: true,
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


    case ERROR_UPDATE_ORDER: {
      return {
        ...state,
        errors: convertErrors(action.payload),
        isLoading: false,
        isReceive: false,
      };
    }
    case REQUEST_UPDATE_ORDER: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case RESPONSE_UPDATE_ORDER: {
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
