import { ActionType } from "../action-types";

interface SearchRepos {
  type: ActionType.SEARCH_REPOS;
}
interface SearchReposSuccess {
  type: ActionType.SEARCH_REPOS_SUCCESS;
  payload: string[];
}
interface SearchReposError {
  type: ActionType.SEARCH_REPOS_ERROR;
  payload: string;
}

export type Action = SearchRepos | SearchReposError | SearchReposSuccess;
