import { combineReducers } from 'redux';
import jobListReducer, { IJobList } from './features/JobList/redux/reducer';
import { loadingReducer } from './features/Loading/redux/reducer';

interface IGlobalState {
  JobList: IJobList;
  loading: any
}

export default combineReducers<IGlobalState>({
  JobList: jobListReducer,
  loading: loadingReducer
});
