import {
  NEXT_PAGE,
  PREV_PAGE,
  UPDATE_SORT,
  UPDATE_PAGE_SIZE,
  UPDATE_SEARCH_TERM,
  UPDATE_SEARCH_CATEGORY,
} from '../actions';

const global_reducer = (state, action) => {
  if (action.type === NEXT_PAGE) {
    return { ...state, page_index: state.page_index + 1 };
  }

  if (action.type === PREV_PAGE) {
    return { ...state, page_index: state.page_index - 1 };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === UPDATE_PAGE_SIZE) {
    return { ...state, page_size: action.payload };
  }

  if (action.type === UPDATE_SEARCH_TERM) {
    return { ...state, search_term: action.payload };
  }

  if (action.type === UPDATE_SEARCH_CATEGORY) {
    return { ...state, search_category: action.payload };
  }

  throw new Error(`No matching "${action.type} - action type`);
};

export default global_reducer;
