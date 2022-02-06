import { ActionType } from "../action-types";
import { Action } from "../actions";

interface ReposReducerState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export default (
  state: ReposReducerState = initialState,
  action: Action
): ReposReducerState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
