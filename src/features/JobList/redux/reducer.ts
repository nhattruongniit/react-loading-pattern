import { LOAD_REPOS, LOAD_REPOS_SUCCESS } from "./constants";

export interface IStateJobList {
  JobList: IJobList
  isFetching: any
}

export interface IJobList {
  userName: string;
  repos: any[];
}

const initialState: IJobList = {
  userName: "",
  repos: []
};

export default function reducer(
  state: IJobList = initialState,
  action: any
): IJobList {
  switch (action.type) {
    case LOAD_REPOS:
      return {
        ...state,
        userName: action.userName
      };
    case LOAD_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.repos
      };
    default:
      return state;
  }
}
