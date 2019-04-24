import { LOAD_REPOS, LOAD_REPOS_SUCCESS } from "./constants";
export const loadRepos = (userName: string) => ({
  type: LOAD_REPOS,
  userName
});

export const reposLoaded = (repos: any, username: any) => ({
  type: LOAD_REPOS_SUCCESS,
  repos,
  username
});
