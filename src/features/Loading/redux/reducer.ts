export const loadingReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
  console.log("===matches=============", matches);
  if (!matches) return state;
  const { 2: requestState } = matches;
  return {
    ...state,
    isFetching: requestState === "REQUEST"
  };
};
