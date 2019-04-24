import { put, takeLatest, call, select } from "redux-saga/effects";
import { LOAD_REPOS } from "./constants";
import { reposLoaded } from "./actions";
import { fetchRepository } from './api';


const getUserName = state => state.data;

export function* getRepos() {
  // Select username from store
  const username = yield select(getUserName);
  const repos = yield call(fetchRepository, username);
  yield put(reposLoaded(repos, username));
}

export default function* watchRequestGithubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  yield takeLatest(LOAD_REPOS, getRepos);
}
