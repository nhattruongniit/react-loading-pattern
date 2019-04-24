// import { watchCounter } from "./counter";
import { all } from 'redux-saga/effects';
import { sagas } from "./features";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([sagas.JobListSaga() /*, another saga here*/]);
}
