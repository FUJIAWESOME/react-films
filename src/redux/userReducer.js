import { getAccountId, getApiKey } from "../Requests";
import { CHANGE_ACCOUNT_ID, CHANGE_TOKEN, RESET_USER_CREDITS } from "./types";

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOKEN: {
      return {
        ...state,
        apiKey: action.apiKey,
      };
    }
    case CHANGE_ACCOUNT_ID: {
      return {
        ...state,
        accountId: action.accountId,
      };
    }
    case RESET_USER_CREDITS: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  token: getApiKey(),
  accountId: getAccountId(),
};
