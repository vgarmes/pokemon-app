import { NEXT_PAGE, PREV_PAGE } from '../actions';

const global_reducer = (state, action) => {
  if (action.type === NEXT_PAGE) {
    return { ...state, page_index: state.page_index + 1 };
  }

  if (action.type === PREV_PAGE) {
    return { ...state, page_index: state.page_index - 1 };
  }
  throw new Error(`No matching "${action.type} - action type`);
};

export default global_reducer;
