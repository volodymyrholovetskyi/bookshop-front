import {
  ERROR_RECEIVE_ORDER,
  REQUEST_ORDER,
  RECEIVE_ORDER,
  ERROR_CREATE_ORDER,
  REQUEST_CREATE_ORDER,
  RESPONSE_CREATE_ORDER,
  ERROR_UPDATE_ORDER,
  REQUEST_UPDATE_ORDER,
  RESPONSE_UPDATE_ORDER
} from '../constans/actionType';

const initialState = {
  order: {},
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

    case ERROR_CREATE_ORDER: {
      return {
        ...state,
        errors: convertErrors(action.payload),
        isLoading: false,
        isReceive: false,
      };
    }
    case REQUEST_CREATE_ORDER: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case RESPONSE_CREATE_ORDER: {
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
