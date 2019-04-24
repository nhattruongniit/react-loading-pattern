import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { loadRepos } from "./redux/actions";
import { IStateJobList } from './redux/reducer'
import { createLoadingSelector } from '../../utils/selector';
import { LOAD_REPOS } from './redux/constants';

const loadingSelector = createLoadingSelector([LOAD_REPOS]);

function JobList({ loadRepos, repos }) {
  const [name, setName] = useState("");
  return (
    <Fragment>
      <input
        type="text"
        name="name"
        onChange={e => setName(e.target.value)}
        placeholder="yelouafi"
      />
      <button onClick={() => loadRepos(name)}>Find Repos Github</button>
      {repos.map(i => (
        <div key={i.id}>{i.name}</div>
      ))}
    </Fragment>
  );
}

const mapStateToProps = (state: IStateJobList) => {
  const {
    JobList: { repos },
  } = state;
  return {
    repos,
    isFetching: loadingSelector(state)
  };
};

const mapDispatchToProps = {
  loadRepos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList);
